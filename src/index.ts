import fs from "fs";
import { of } from "await-of";
import jsZip from "jszip";
import { parse } from "./parse";
import { unparse } from "./unparse";

const { readFile, writeFile } = fs.promises;
const DEV_DEBUG = process.env.DCS_MISSION_PARSER_DEV_DEBUG || false;
if (DEV_DEBUG) {
  console.debug(
    "Dev debug is on, the parser will generate a lot of junk files meant for debug. Unset DCS_MISSION_PARSER_DEV_DEBUG to get rid of this functionality"
  );
}

const openMission = async (missionFilePath: string) =>
  await jsZip.loadAsync(await readFile(missionFilePath));

/**
 * @param missionFilePath  The path to the mission file
 * @param missionOutputPath  The desired output path to save the mission
 */
const newMission = async (
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
    const jsonMissionString = parse(state.get("missionFile"));

    if (DEV_DEBUG) {
      writeFile("parse_output.json", jsonMissionString);
    }
    const jsonMissionObject = JSON.parse(jsonMissionString) as MissionObject;
    state.set("jsonMissionObject", jsonMissionObject);
    return state.get("jsonMissionObject");
  };
  const toLua = () => {
    const jsonMissionObject = state.get("jsonMissionObject");
    const luaMissionString = unparse(jsonMissionObject);
    if (DEV_DEBUG) {
      writeFile("unparse_output", luaMissionString);
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

export { newMission };

// Example use
(async () => {
  const mission = await newMission(
    "55th_3rd_desert_scout_patrol.miz",
    "55th_3rd_desert_scout_patrol_updated.miz"
  );
  await mission.toJSON();
  await mission.save();
})();
