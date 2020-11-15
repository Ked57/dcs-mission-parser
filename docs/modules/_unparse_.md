**[dcs-mission-parser](../README.md)**

> [Globals](../globals.md) / "unparse"

# Module: "unparse"

## Index

### Variables

* [RULES](_unparse_.md#rules)

### Functions

* [unparse](_unparse_.md#unparse)
* [unparseAddLineBreakAfterDeclaration](_unparse_.md#unparseaddlinebreakafterdeclaration)
* [unparseAddMoreLineBreaks](_unparse_.md#unparseaddmorelinebreaks)
* [unparseAddTrailingCommas](_unparse_.md#unparseaddtrailingcommas)
* [unparseRemoveTheEscapeCharactersFromJsonAntiSlashes](_unparse_.md#unparseremovetheescapecharactersfromjsonantislashes)
* [unparseSetCommentsValuesBackToLuaComments](_unparse_.md#unparsesetcommentsvaluesbacktoluacomments)
* [unparseSetDecimalsKeysBackToNormal](_unparse_.md#unparsesetdecimalskeysbacktonormal)
* [unparseSwapFromJsonBracketToLua](_unparse_.md#unparseswapfromjsonbrackettolua)

## Variables

### RULES

• `Const` **RULES**: [unparseAddTrailingCommas](_unparse_.md#unparseaddtrailingcommas)[] = [ unparseAddTrailingCommas, unparseSwapFromJsonBracketToLua, unparseAddLineBreakAfterDeclaration, unparseAddMoreLineBreaks, unparseSetCommentsValuesBackToLuaComments, unparseRemoveTheEscapeCharactersFromJsonAntiSlashes, unparseSetDecimalsKeysBackToNormal,]

*Defined in [unparse.ts:37](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L37)*

## Functions

### unparse

▸ `Const`**unparse**(`jsonMissionObject`: any): string

*Defined in [unparse.ts:47](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L47)*

#### Parameters:

Name | Type |
------ | ------ |
`jsonMissionObject` | any |

**Returns:** string

___

### unparseAddLineBreakAfterDeclaration

▸ `Const`**unparseAddLineBreakAfterDeclaration**(`missionString`: string): string

*Defined in [unparse.ts:9](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L9)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### unparseAddMoreLineBreaks

▸ `Const`**unparseAddMoreLineBreaks**(`missionString`: string): string

*Defined in [unparse.ts:15](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### unparseAddTrailingCommas

▸ `Const`**unparseAddTrailingCommas**(`missionString`: string): string

*Defined in [unparse.ts:1](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L1)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### unparseRemoveTheEscapeCharactersFromJsonAntiSlashes

▸ `Const`**unparseRemoveTheEscapeCharactersFromJsonAntiSlashes**(`missionString`: string): string

*Defined in [unparse.ts:23](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L23)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### unparseSetCommentsValuesBackToLuaComments

▸ `Const`**unparseSetCommentsValuesBackToLuaComments**(`missionString`: string): string

*Defined in [unparse.ts:20](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L20)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### unparseSetDecimalsKeysBackToNormal

▸ `Const`**unparseSetDecimalsKeysBackToNormal**(`missionString`: string): string

*Defined in [unparse.ts:30](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L30)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string

___

### unparseSwapFromJsonBracketToLua

▸ `Const`**unparseSwapFromJsonBracketToLua**(`missionString`: string): string

*Defined in [unparse.ts:4](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/unparse.ts#L4)*

#### Parameters:

Name | Type |
------ | ------ |
`missionString` | string |

**Returns:** string
