const weatherReducer = (state = {}, action) => {
  switch (action.type) {
    case "TODAY_WEATHER":
      return action.todayWeather;
    case "5DAYS_WEATHER":
      return action.fiveDaysWeather;
    default:
      return state;
  }
};

export default weatherReducer;
