**[dcs-mission-parser](../README.md)**

> [Globals](../globals.md) / "parse"

# Module: "parse"

## Index

### Variables

* [RULES](_parse_.md#rules)

### Functions

* [parse](_parse_.md#parse)
* [parseOrderDecimalArrays](_parse_.md#parseorderdecimalarrays)
* [parseRemoveEndOfMissionComment](_parse_.md#parseremoveendofmissioncomment)
* [parseRemoveMissionHeader](_parse_.md#parseremovemissionheader)
* [parseRemoveTrailingCommas](_parse_.md#parseremovetrailingcommas)
* [parseSetCommentsAsJsonValues](_parse_.md#parsesetcommentsasjsonvalues)
* [parseSwapDecimalLuaBracketDeclarationsToJson](_parse_.md#parseswapdecimalluabracketdeclarationstojson)
* [parseSwapLuaBracketDeclarationsToJson](_parse_.md#parseswapluabracketdeclarationstojson)

## Variables

### RULES

• `Const` **RULES**: [parseRemoveMissionHeader](_parse_.md#parseremovemissionheader)[] = [ parseRemoveMissionHeader, parseSwapLuaBracketDeclarationsToJson, parseOrderDecimalArrays, parseSwapDecimalLuaBracketDeclarationsToJson, parseSetCommentsAsJsonValues, parseRemoveTrailingCommas, parseRemoveEndOfMissionComment,]

*Defined in [parse.ts:32](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L32)*

## Functions

### parse

▸ `Const`**parse**(`missionString`: string): string

*Defined in [parse.ts:42](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L42)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### parseOrderDecimalArrays

▸ `Const`**parseOrderDecimalArrays**(`missionString`: string): string

*Defined in [parse.ts:7](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L7)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### parseRemoveEndOfMissionComment

▸ `Const`**parseRemoveEndOfMissionComment**(`missionString`: string): string

*Defined in [parse.ts:29](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L29)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### parseRemoveMissionHeader

▸ `Const`**parseRemoveMissionHeader**(`missionString`: string): string

*Defined in [parse.ts:1](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L1)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### parseRemoveTrailingCommas

▸ `Const`**parseRemoveTrailingCommas**(`missionString`: string): string

*Defined in [parse.ts:23](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### parseSetCommentsAsJsonValues

▸ `Const`**parseSetCommentsAsJsonValues**(`missionString`: string): string

*Defined in [parse.ts:16](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L16)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### parseSwapDecimalLuaBracketDeclarationsToJson

▸ `Const`**parseSwapDecimalLuaBracketDeclarationsToJson**(`missionString`: string): string

*Defined in [parse.ts:13](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L13)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### parseSwapLuaBracketDeclarationsToJson

▸ `Const`**parseSwapLuaBracketDeclarationsToJson**(`missionString`: string): string

*Defined in [parse.ts:4](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/parse.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string
