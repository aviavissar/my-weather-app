import { useDispatch } from "react-redux";
import consts from "../consts";
import toastr from "toastr";
import {
  citiesArrAction,
  cityWeatherAction,
  daysWeatherAction,
} from "../actions/action";

const API_APP_KEY = consts.WEATHER_API_KEY;
toastr.options = {
  debug: false,
  newestOnTop: false,
  progressBar: false,
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "100000",
  timeOut: "50000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
};

const useFetch = () => {
  const dispatch = useDispatch();

  const fetchCitiesArr = async (query = "Tel-Aviv") => {
    try {
    
        const response = await fetch(
          `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_APP_KEY}&q=${query}`,
        
        );
        const city = await response.json();
        await dispatch(citiesArrAction(city));
        return city;
   
    } catch (error) {
     // throw error;
    }
  };

  const fetchDaysWeather = async (key = "215854") => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_APP_KEY}&metric=true`
      );
      const daysWeather = await response.json();
      await dispatch(daysWeatherAction(daysWeather));
      return daysWeather;
    } catch (error) {
      //throw error;
    }
  };

  const fetchCityWeather = async (key = "215854") => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_APP_KEY}&details=true`
      );
      const cityWeather = await response.json();
      await dispatch(cityWeatherAction(cityWeather));
      return cityWeather;
    } catch (error) {
     // throw error;
    }
  };

  return { fetchCitiesArr, fetchDaysWeather, fetchCityWeather };
};

export default useFetch;
