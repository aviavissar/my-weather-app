import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import citiesInfoReducer from "../reducers/citiesInfoReducer";
import favoritesReducer from "../reducers/favoritesReducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  citiesInfo: citiesInfoReducer,
  favorites: favoritesReducer,
});

export default () => {
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
