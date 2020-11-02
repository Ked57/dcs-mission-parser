import fs from "fs";
import { of } from "await-of";
import jsZip from "jszip";

const { readFile, writeFile } = fs.promises;
const DEV_DEBUG = process.env.DCS_MISSION_PARSER_DEV_DEBUG || false;
if (DEV_DEBUG) {
  console.debug(
    "Dev debug is on, the parser will generate a lot of junk files meant for debug. Unset DCS_MISSION_PARSER_DEV_DEBUG to get rid of this functionality"
  );
}

const openMission = async (missionFilePath: string) =>
  await jsZip.loadAsync(await readFile(missionFilePath));

export const newMission = async (
  missionFilePath: string,
  missionOutputPath: string
): Promise<Mission> => {
  const state = new Map<String, any>();
  const [mizFile, errMizFile] = await of(openMission(missionFilePath));
  if (errMizFile || !mizFile) {
    console.error(
      "Error dezipping mission file: ",
      errMizFile || "mizFile is null"
    );
    return Promise.reject();
  }
  state.set("missionZipFile", mizFile);
  const [missionData, errMissionFile] = await of(
    (mizFile.file("mission") as jsZip.JSZipObject).async("string")
  );
  if (errMissionFile || !missionData) {
    console.error(
      "Error looking for mission data: ",
      errMissionFile || "mission file is null"
    );
    return Promise.reject();
  }
  state.set("missionFile", missionData);
  const getMissionFileString = () => state.get("missionFile");
  const toJSON = () => {
    const jsonMissionString = state
      .get("missionFile")
      .replace(/mission = /g, "")
      .replace(/\["(.*)"\] =/g, (_: string, p1: string) => `"${p1}":`)
      .replace(
        /\[(\d*)\] = (\n *{)/g,
        (_: string, p1: string, p2: string) => `"${p1}0":${p2}`
      )
      .replace(/\[(\d*)\] =/g, (_: string, p1: string) => `"${p1}":`)
      .replace(
        /( -- end of \["*([\d\w /]*)"*\])/g,
        (_: string, p1: string, p2: string) =>
          `"${p2}1": "${p1.replace(/"/g, `\\"`)}",`
      )
      .replace(/(,)(\n *})/g, (_: string, __: string, p2: string) => p2)
      .replace(`-- end of mission`, "");
    if (DEV_DEBUG) {
      writeFile("parse_output.json", jsonMissionString);
    }
    const jsonMissionObject = JSON.parse(jsonMissionString) as MissionObject;
    state.set("jsonMissionObject", jsonMissionObject);
    return state.get("jsonMissionObject");
  };
  const toLua = () => {
    const jsonMissionObject = state.get("jsonMissionObject");
    const luaMissionString = `${`mission = \n${JSON.stringify(
      jsonMissionObject,
      null,
      4
    )}`
      .replace(/(["\d\w}])(\n.*})/g, (_, p1, p2) => `${p1},${p2}`)
      .replace(/(?!,"[\w\d]*") "(.*)": /g, (_, p1) =>
        Number(p1) ? ` [${p1}] = ` : ` ["${p1}"] = `
      )
      .replace(
        /( *)(\[.*\] = )({)\n/g,
        (_, p1, p2, p3) => `${p1}${p2}\n${p1}${p3}\n`
      )
      .replace(
        /( *)(\[.*\] = )({)(})/g,
        (_, p1, p2, p3, p4) => `${p1}${p2}\n${p1}${p3}\n${p1}${p4}`
      )
      .replace(/\n *\[.*( --.*)",/g, (_, p1) => p1)
      .replace(/( -- end of \[\\"[\w\d]*\\"\])/g, (_, p1) =>
        p1.replace(/\\/g, "")
      )
      .replace(
        /\n( *)\[([\d]*)\] = \n/g,
        (_, p1, p2) =>
          `\n${p1}[${Number(p2) ? Math.round(Number(p2) / 10) : p2}] = \n`
      )} -- end of mission\n`;
    if (DEV_DEBUG) {
      writeFile("serialize_output", luaMissionString);
    }
    state.set("luaMissionString", luaMissionString);
    return state.get("luaMissionString");
  };
  const save = async () => {
    const luaMissionString = toLua();
    const [mizFile, errMizFile] = await of(openMission(missionFilePath));
    if (errMizFile || !mizFile) {
      console.error(
        "Error dezipping mission file: ",
        errMizFile || "mizFile is null"
      );
      return Promise.reject();
    }
    mizFile.file("mission", luaMissionString);
    mizFile
      .generateNodeStream({
        type: "nodebuffer",
        streamFiles: true,
        compression: "DEFLATE",
      })
      .pipe(fs.createWriteStream(missionOutputPath));
  };
  return {
    getMissionFileString,
    toJSON,
    toLua,
    save,
  };
};

type MissionObject = any;

type Mission = {
  getMissionFileString: () => string;
  toJSON: () => MissionObject;
  toLua: () => string;
  save: () => void;
};

(async () => {
  const mission = await newMission(
    "55th_3rd_desert_scout_patrol.miz",
    "55th_3rd_desert_scout_patrol_updated.miz"
  );
  await mission.toJSON();
  await mission.save();
})();
