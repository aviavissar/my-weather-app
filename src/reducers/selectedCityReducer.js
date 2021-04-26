const citiesInfoReducer = (state = [], action) => {
  switch (action.type) {
    case "SELECTED_CITY":
      return action.city;
    default:
      return state;
  }
};

export default citiesInfoReducer;
