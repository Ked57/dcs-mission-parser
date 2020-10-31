import { readFileSync, writeFileSync } from "fs";

export const newMission = (missionFilePath: string, missionOutputPath: string): Mission => {
    const state = new Map<String, any>();
    state.set("missionFile", readFileSync(missionFilePath).toString());
    return {
        getMissionFileString: () => state.get("missionFile"),
        toJSON: () => {
            const JSONMissionString = state.get("missionFile")
            .replace(/mission = /g, "")
            .replace(/\["(.*)"\] =/g, (_: string, p1 :string) => `"${p1}":`)
            .replace(/\[(\d*)\] =/g, (_: string, p1: string) => `"${p1}":`)
            .replace(/( -- .*)/g, "")
            .replace(/(,)(\n.*})/g, (_: string, __: string, p2: string) => p2);
            const JSONMissionObject = JSON.parse(JSONMissionString) as MissionObject
            state.set("jsonMissionObject", JSONMissionObject)
            return state.get("jsonMissionObject")
        }
    }
}

type MissionObject = any

type Mission = {
    getMissionFileString: () => string;
    toJSON: () => MissionObject; 
}