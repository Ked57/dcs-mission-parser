const unparseAddTrailingCommas = (missionString: string) =>
  missionString.replace(/(["\d\w}])(\n.*})/g, (_, p1, p2) => `${p1},${p2}`);

const unparseSwapFromJsonBracketToLua = (missionString: string) =>
  missionString.replace(/(?!,"[\w\d]*") "(.*)": /g, (_, p1) =>
    Number(p1) ? ` [${p1}] = ` : ` ["${p1}"] = `
  );

const unparseAddLineBreakAfterDeclaration = (missionString: string) =>
  missionString.replace(
    /( *)(\[.*\] = )({)\n/g,
    (_, p1, p2, p3) => `${p1}${p2}\n${p1}${p3}\n`
  );

const unparseAddMoreLineBreaks = (missionString: string) =>
  missionString.replace(
    /( *)(\[.*\] = )({)(})/g,
    (_, p1, p2, p3, p4) => `${p1}${p2}\n${p1}${p3}\n${p1}${p4}`
  );
const unparseSetCommentsValuesBackToLuaComments = (missionString: string) =>
  missionString.replace(/\n *\[.*( --.*)",/g, (_, p1) => p1);

const unparseRemoveTheEscapeCharactersFromJsonAntiSlashes = (
  missionString: string
) =>
  missionString.replace(/( -- end of \[\\"[\w\d]*\\"\])/g, (_, p1) =>
    p1.replace(/\\/g, "")
  );

const unparseSetDecimalsKeysBackToNormal = (missionString: string) =>
  missionString.replace(
    /\n( *)\[([\d]*)\] = \n/g,
    (_, p1, p2) =>
      `\n${p1}[${Number(p2) ? Math.round(Number(p2) / 10) : p2}] = \n`
  );

const RULES = [
  unparseAddTrailingCommas,
  unparseSwapFromJsonBracketToLua,
  unparseAddLineBreakAfterDeclaration,
  unparseAddMoreLineBreaks,
  unparseSetCommentsValuesBackToLuaComments,
  unparseRemoveTheEscapeCharactersFromJsonAntiSlashes,
  unparseSetDecimalsKeysBackToNormal,
];

export const unparse = (jsonMissionObject: any) => {
  let missionString = `${JSON.stringify(jsonMissionObject, null, 4)}`;
  RULES.forEach((rule) => (missionString = rule(missionString)));
  return `mission = \n${missionString} -- end of mission\n`;
};
