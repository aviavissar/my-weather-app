import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import useFetch from "../../../services/useFetch";
import useFavorits from "../../../services/useFavorits";
import CONSTS from "../../../consts";
import Search from "../Search/Search.component";
import Today from "../Today/Today.component";
import {transformIcons} from "../../../services/utils"
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
          cities = await fetchCitiesArr(CONSTS.DEFAULT_SEARCH_CITY);
          weater = await fetchCityWeather(CONSTS.DEFAULT_KEY_CITY);
          days = await fetchDaysWeather(CONSTS.DEFAULT_KEY_CITY);
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
