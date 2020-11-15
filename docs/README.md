**[dcs-mission-parser](README.md)**

> [Globals](globals.md)

<h1 align="center">Welcome to dcs-mission-parser 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/Ked57/dcs-mission-parser#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/Ked57/dcs-mission-parser/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/Ked57/dcs-mission-parser/blob/master/LICENSE" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/github/license/Ked57/dcs-mission-parser" />
  </a>
  <a href="https://twitter.com/ked57\_" target="_blank">
    <img alt="Twitter: ked57\_" src="https://img.shields.io/twitter/follow/ked57\_.svg?style=social" />
  </a>
</p>

> A lib to extract, parse, modify and save.miz files from DCS World

### 🏠 [Homepage](https://github.com/Ked57/dcs-mission-parser#readme)

## Install

```sh
npm install dcs-mission-parser
```

## Usage

### newMission

▸ `Const`**newMission**(`missionFilePath`: string, `missionOutputPath`: string): Promise\<Mission>

#### Parameters:

Name | Type | Description |
------ | ------ | ------ |
`missionFilePath` | string | The path to the mission file |
`missionOutputPath` | string | The desired output path to save the mission  |

**Returns:** Promise\<Mission>

This function will enable you to init the parser, then you have several functions to help you parse to JSON and back to LUA. 

```javascript
const mission = await newMission(
    "example_mission.miz",
    "example_mission_updated.miz"
  );
// To get the JSON Mission Object parsed from the mission file
const JSONMissionObject = await mission.toJSON();
// Once you're done modifying the mission file, you can save it with this function and it will write it to your disk at the path specified earlier
await mission.save();
```

## Author

👤 **Ked**

* Twitter: [@ked57\_](https://twitter.com/ked57\_)
* Github: [@Ked57](https://github.com/Ked57)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/Ked57/dcs-mission-parser/issues). You can also take a look at the [contributing guide](https://github.com/Ked57/dcs-mission-parser/blob/master/CONTRIBUTING.md).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2020 [Ked](https://github.com/Ked57).<br />
This project is [Apache--2.0](https://github.com/Ked57/dcs-mission-parser/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
