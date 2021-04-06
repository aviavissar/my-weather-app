import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import CONSTS from "../../../consts";
import useFetch from "../../../services/fetch";
import useFavorits from "../../../services/favorits";
import Search from "../Search/Search.component";
import Today from "../Today/Today.component";
import Fivedays from "../FiveDaysWeather/FiveDaysWeather.component";
import AddToFavorits from "../AddFavorits/AddFavorits.component";
import toastr from "toastr";


const HomeComponent = ({ hideLoader }) => {
  const location = useLocation();
  const history = useHistory();
  let { fetchCitiesArr, fetchCityWeather, fetchDaysWeather } = useFetch();
  const { toAddToFavorits } = useFavorits();
  const [isFavorits, setIsFavorits] = useState(false);
  const [cityObj, setCityObj] = useState({});
  const [cityWeather, setCityWeather] = useState(null);
  const [daysWeather, setDaysWeather] = useState(null);

  const favorites = useSelector((state) => state.favorites);

  useEffect(() => {
    const doAsync = async () => {
      try {
        let cities, weater, days;
        if (!location.state) {
          cities = await fetchCitiesArr(process.env.DEFAULT_SEARCH_CITY);
          weater = await fetchCityWeather(process.env.DEFAULT_KEY_CITY);
          days = await fetchDaysWeather(process.env.DEFAULT_KEY_CITY);
          setCityObj(cities[0]);
        } else {
          const favoriteCity = favorites.find(
            (city) => city.Key == location.state.cityKey
          );
          setCityObj(favoriteCity);
          weater = await fetchCityWeather(location.state.cityKey);
          days = await fetchDaysWeather(location.state.cityKey);
          history.replace({ ...history.location, state: null });
        }
        setCityWeather(weater[0]);
        setDaysWeather(days);
        hideLoader();
      } catch (error) {
        hideLoader();
        toastr["error"](
          "fail to fetch! ",
          "check the net! if the net ok try later" + error
        );
      }
    };
    doAsync();
  }, []);

  const chackIfInMyFavorits = (cityObj) => {
    return favorites.find((city) => cityObj.Key === city.Key);
  };

  const transformIcons = (iconNum) => {
    switch (iconNum) {
      case 1 || 30 || 38 || 33 || 34:
        return 2;
      case 2 || 3:
        return 1;
      case 19 || 31 || 43 || 44:
        return 6;
      case 4 || 5 || 6 || 20 || 21:
        return 3;
      case 11:
        return 7;
      case 13 || 14 || 16 || 17:
        return 4;
      case 32 || 37:
        return 8;
      case 7 || 8 || 35 || 36:
        return 5;
      case 12 || 13 || 15 || 18 || 25:
        return 9;
      case 22 || 23 || 24:
        return 13;
      case 40 || 39 || 26 || 29:
        return 10;
      case 41 || 42:
        return 12;
      case 12:
        return 14;
      default:
        return 3;
    }
  };

  const handlSendCityObj = async (city) => {
    const weater = await fetchCityWeather(city.Key);
    const days = await fetchDaysWeather(city.Key);
    setCityObj({ ...cityObj, ...city });
    setCityWeather({ ...cityWeather, ...weater[0] });
    setDaysWeather(days);
  };

  const doAddToFavorits = () => {
    toAddToFavorits(cityObj);
    setIsFavorits(true);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-xs-12">
          <Search sendCityObj={handlSendCityObj}></Search>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-md-7">
          <Today cityObj={cityObj} todayWeather={cityWeather} />
        </div>
        <div className="col-xs-12 col-md-5">
          <AddToFavorits
            isFavorits={isFavorits || chackIfInMyFavorits(cityObj)}
            addToFavorits={doAddToFavorits}
          ></AddToFavorits>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-xs-12 ">
          <Fivedays transformIcons={transformIcons} days={daysWeather} />
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;
