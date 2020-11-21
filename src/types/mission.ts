type MissionDate = {
  Year: number;
  Day: number;
  Month: number;
};

type MissionWeatherWind = {
  speed: number;
  dir: number;
};

type MissionWeatherCyclone = {
  pressure_spread: number;
  centerz: number;
  ellipticity: number;
  rotation: number;
  pressure_excess: number;
  centerx: number;
};

type MissionWeatherClouds = {
  thickness: number;
  density: number;
  base: number;
  iprecptns: number;
};

type MissionWeather = {
  wind: {
    at8000: MissionWeatherWind;
    atGround: MissionWeatherWind;
    at2000: MissionWeatherWind;
  };
  enableFog: boolean;
  season: {
    temperature: number;
  };
  qnh: number;
  cyclones: {
    [key: number]: MissionWeatherCyclone;
  };
  dust_density: number;
  enable_dust: boolean;
  clouds: MissionWeatherClouds;
  groundTurbulence: number;
  fog: {
    thickness: number;
    visibility: number;
  };
  visibility: number;
};

type MissionCoalitions = {
  blue: { [key: number]: number };
  neutrals: { [key: number]: number };
  red: { [key: number]: number };
};

export type Mission = {
  date: MissionDate;
  weather: MissionWeather;
  coalitions: MissionCoalitions;
  //   planes: MissionPlane[];
  //   helicopters: MissionHelicopter[];
  //   ships: MissionShips[];
  //   vehicles: MissionVehicles[];
  //   statics: MissionStatics[];
};
