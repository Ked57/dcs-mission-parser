import { readFileSync, writeFileSync } from "fs";

const DEV_DEBUG = process.env.DCS_MISSION_PARSER_DEV_DEBUG || false;
if (DEV_DEBUG) {
  console.debug(
    "Dev debug is on, the parser will generate a lot of junk files meant for debug. Unset DCS_MISSION_PARSER_DEV_DEBUG to get rid of this functionality"
  );
}

export const newMission = (
  missionFilePath: string,
  missionOutputPath: string
): Mission => {
  const state = new Map<String, any>();
  state.set("missionFile", readFileSync(missionFilePath).toString());
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
      writeFileSync("parse_output.json", jsonMissionString);
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
      .replace(
        /\n( *)\[([\d]*)\] = \n/g,
        (_, p1, p2) =>
          `\n${p1}[${Number(p2) ? Math.round(Number(p2) / 10) : p2}] = \n`
      )
      .replace(/\\"/g, `"`)
    } -- end of mission\n`;
    state.set("luaMissionString", luaMissionString);
    return state.get("luaMissionString");
  };
  const save = () => {
    const luaMissionString = toLua();
    writeFileSync(missionOutputPath, luaMissionString);
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

const mission = newMission("mission.old", "mission");
mission.toJSON();
mission.save();
