const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITS":
      return action.favorits;
    case "SET_FAVORITS":
      return action.favorits;
    default:
      return state;
  }
};

export default favoritesReducer;
