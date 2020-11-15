const parseRemoveMissionHeader = (missionString: string) =>
  missionString.replace(/mission = /g, "");

const parseSwapLuaBracketDeclarationsToJson = (missionString: string) =>
  missionString.replace(/\["(.*)"\] =/g, (_: string, p1: string) => `"${p1}":`);

const parseOrderDecimalArrays = (missionString: string) =>
  missionString.replace(
    /\[(\d*)\] = (\n *{)/g,
    (_: string, p1: string, p2: string) => `"${p1}0":${p2}`
  );

const parseSwapDecimalLuaBracketDeclarationsToJson = (missionString: string) =>
  missionString.replace(/\[(\d*)\] =/g, (_: string, p1: string) => `"${p1}":`);

const parseSetCommentsAsJsonValues = (missionString: string) =>
  missionString.replace(
    /( -- end of \["*([\d\w /]*)"*\])/g,
    (_: string, p1: string, p2: string) =>
      `"${p2}1": "${p1.replace(/"/g, `\\"`)}",`
  );

const parseRemoveTrailingCommas = (missionString: string) =>
  missionString.replace(
    /(,)(\n *})/g,
    (_: string, __: string, p2: string) => p2
  );

const parseRemoveEndOfMissionComment = (missionString: string) =>
  missionString.replace(`-- end of mission`, "");

const RULES = [
  parseRemoveMissionHeader,
  parseSwapLuaBracketDeclarationsToJson,
  parseOrderDecimalArrays,
  parseSwapDecimalLuaBracketDeclarationsToJson,
  parseSetCommentsAsJsonValues,
  parseRemoveTrailingCommas,
  parseRemoveEndOfMissionComment,
];

export const parse = (missionString: string) => {
  RULES.forEach((rule) => (missionString = rule(missionString)));
  return missionString;
};
