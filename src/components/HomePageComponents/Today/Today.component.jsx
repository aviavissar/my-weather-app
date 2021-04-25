import React, { useState, useEffect } from "react";
import moment from "moment";
import { useSelector } from "react-redux";

const TodayComponent = ({ cityObj, todayWeather }) => {
  const cityiesInfo = useSelector((state) => state.cityiesInfo);

  const [cityWeather, setCityWeather] = useState(todayWeather);
  const [selectedCity, setSelectedCity] = useState([]);
  const [WeatherIcon, setWeatherIcon] = useState(2);

  useEffect(() => {
    console.log(selectedCity);
    if (todayWeather) {
      console.log("cvc", cityObj);
      setCityWeather(todayWeather);
      setSelectedCity(cityObj);
      setWeatherIcon(transformIcons(todayWeather.WeatherIcon));
    }
  }, [todayWeather, cityObj]);

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

  return (
    <div className="">
      {cityWeather && selectedCity ? (
        <div className="today forecast forecast-content">
          <div className="forecast-header row">
            <div className="location col-12 col-xs-12">
              <h2>{selectedCity.LocalizedName}</h2>
            </div>
            <div className="day-name col-12 col-xs-12">
              <h3>
                {moment(selectedCity.LocalObservationDateTime).format(
                  "dddd D MMM"
                )}
              </h3>
            </div>
          </div>
          <div className="degree row">
            <div className="num col-md-6 col-xs-5">
              {cityWeather.Temperature.Metric.Value}
              <sup>o</sup>C
            </div>
            <div className="forecast-icon col-md-6 col-xs-7">
              <img src={`/images/icons/icon-${WeatherIcon}.svg`} alt="" />
            </div>
          </div>
          <div className="row footericons">
            <span className="col-xs-5 col-md-3">
              <img src="images/icon-wind.png" alt="" />
              {cityWeather.Wind.Speed.Metric.Value}km/h
            </span>
            <span className="col-xs-4 col-md-3">
              <img src="images/icon-compass.png" alt="" />
              {cityWeather.Wind.Direction.Localized}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default TodayComponent;
