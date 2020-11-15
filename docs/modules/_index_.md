**[dcs-mission-parser](../README.md)**

> [Globals](../globals.md) / "index"

# Module: "index"

## Index

### Type aliases

* [Mission](_index_.md#mission)
* [MissionObject](_index_.md#missionobject)

### Variables

* [DEV\_DEBUG](_index_.md#dev_debug)
* [readFile](_index_.md#readfile)
* [writeFile](_index_.md#writefile)

### Functions

* [newMission](_index_.md#newmission)
* [openMission](_index_.md#openmission)

## Type aliases

### Mission

Ƭ  **Mission**: { getMissionFileString: () => string ; save: () => void ; toJSON: () => [MissionObject](_index_.md#missionobject) ; toLua: () => string  }

*Defined in [index.ts:108](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/index.ts#L108)*

#### Type declaration:

Name | Type |
------ | ------ |
`getMissionFileString` | () => string |
`save` | () => void |
`toJSON` | () => [MissionObject](_index_.md#missionobject) |
`toLua` | () => string |

___

### MissionObject

Ƭ  **MissionObject**: any

*Defined in [index.ts:106](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/index.ts#L106)*

## Variables

### DEV\_DEBUG

• `Const` **DEV\_DEBUG**: string \| false = process.env.DCS\_MISSION\_PARSER\_DEV\_DEBUG \|\| false

*Defined in [index.ts:8](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/index.ts#L8)*

___

### readFile

•  **readFile**: readFile

*Defined in [index.ts:7](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/index.ts#L7)*

___

### writeFile

•  **writeFile**: writeFile

*Defined in [index.ts:7](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/index.ts#L7)*

## Functions

### newMission

▸ `Const`**newMission**(`missionFilePath`: string, `missionOutputPath`: string): Promise\<[Mission](_index_.md#mission)>

*Defined in [index.ts:22](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/index.ts#L22)*

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`missionFilePath` | string | The path to the mission file |
`missionOutputPath` | string | The desired output path to save the mission  |

**Returns:** Promise\<[Mission](_index_.md#mission)>

___

### openMission

▸ `Const`**openMission**(`missionFilePath`: string): Promise\<JSZip>

*Defined in [index.ts:15](https://github.com/Ked57/dcs-mission-parser/blob/ba0294c/src/index.ts#L15)*

#### Parameters:

Name | Type |
------ | ------ |
`missionFilePath` | string |

**Returns:** Promise\<JSZip>
