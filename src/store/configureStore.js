import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import citiesInfoReducer from "../reducers/citiesInfoReducer";
import weatherReducer from "../reducers/weatherReducer";
import favoritesReducer from "../reducers/favoritesReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  citiesInfo: citiesInfoReducer,
  weatherReducer: weatherReducer,
  favorites: favoritesReducer,
});

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
