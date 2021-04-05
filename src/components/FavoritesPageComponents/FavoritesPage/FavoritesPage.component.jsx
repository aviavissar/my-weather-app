import React, { useEffect } from "react";
import { useHistory ,useLocation} from 'react-router-dom';

import { useSelector} from "react-redux";
import useFavorits from "../../../services/favorits";
import useFetch from "../../../services/fetch";
import FavoriteCity from "../FavoritesCity/FavoritesCityComponent";

const FavoriteComponent = ({ hideLoader}) => {
  const { toAddToFavorits, getFavorits, removeFavorits } = useFavorits();
  const { fetchCitiesArr, fetchDaysWeather, fetchCityWeather } = useFetch();
  const thefavorites = useSelector((state) => state.favorites);
  const history = useHistory();
  useEffect(() => {
    toAddToFavorits();
    hideLoader();
  }, []);

  const selectCity = ({ LocalizedName, Key }) => {
    toAddToFavorits();
    fetchCitiesArr(LocalizedName);
    fetchCityWeather(Key);
    fetchDaysWeather(Key);
    history.push("/");
    history.push({
      pathname: '/',
      
      state: { cityKey:Key,cityName:LocalizedName}
    })
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
