export const citiesArrAction = (city) => ({
  type: "SELECTED_CITY",
  city,
});

export const addToFavorits = (favorits) => ({
  type: "ADD_TO_FAVORITS",
  favorits,
});

export const setFavorits = (favorits) => ({
  type: "SET_FAVORITS",
  favorits,
});
