export const citiesArrAction = (citiesInfo) => ({
  type: "CITIES_INFO",
  citiesInfo,
});

export const cityWeatherAction = (todayWeather) => ({
  type: "TODAY_WEATHER",
  todayWeather,
});

export const daysWeatherAction = (fiveDaysWeather) => ({
  type: "5DAYS_WEATHER",
  fiveDaysWeather,
});

export const addToFavorits = (favorits) => ({
  type: "ADD_TO_FAVORITS",
  favorits,
});

export const setFavorits = (favorits) => ({
  type: "SET_FAVORITS",
  favorits,
});
