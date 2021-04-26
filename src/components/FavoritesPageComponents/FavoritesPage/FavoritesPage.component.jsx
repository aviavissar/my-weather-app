import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import useFavorits from "../../../services/useFavorits";
import FavoriteCity from "../FavoritesCity/FavoritesCityComponent";
import {
  fetchCitiesArr,
  fetchDaysWeather,
  fetchCityWeather,
} from "../../../services/fetch";

const FavoriteComponent = ({ hideLoader }) => {
  const { removeFavorits } = useFavorits();
  const thefavorites = useSelector((state) => state.favorites);
  const history = useHistory();

  useEffect(() => {
    hideLoader();
  }, []);

  const selectCity = ({ LocalizedName, Key }) => {
    fetchCitiesArr(LocalizedName);
    fetchCityWeather(Key);
    fetchDaysWeather(Key);
    history.push("/");
    history.push({
      pathname: "/",
      state: { cityKey: Key, cityName: LocalizedName },
    });
  };
  const removeCity = (key) => {
    removeFavorits(key);
  };

  return (
    <div className="favorites">
      <div className="row">
        {thefavorites.map((city, inx) => {
          return (
            <FavoriteCity
              key={city.Key + inx}
              city={city}
              selectCity={() => selectCity(city)}
              removeCity={() => removeCity(city.Key)}
            ></FavoriteCity>
          );
        })}
      </div>
    </div>
  );
};

export default FavoriteComponent;
