const citiesInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "CITIES_INFO":
      return action.citiesInfo;
    default:
      return state;
  }
};

export default citiesInfoReducer;
