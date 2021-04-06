import { useDispatch } from "react-redux";
import toastr from "toastr";
import {
  citiesArrAction,
  cityWeatherAction,
  daysWeatherAction,
} from "../actions/action";


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
          `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=AEvJItzx62qMCozpuB0nGCsf3izvCzZa&q=${query}`,
      {
        method: "GET",
        mode: "cors", 
        cache: 'no-cache', 
        credentials: 'same-origin',
       
        redirect: 'follow',
        referrerPolicy: "no-referrer",
      }
         );
        const city = await response.json();
        await dispatch(citiesArrAction(city));
        return city;
       } catch (error) {
      throw error;
    }
  };

  const fetchDaysWeather = async (key = "215854") => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=AEvJItzx62qMCozpuB0nGCsf3izvCzZa&metric=true`,
      {
        method: "GET",
        mode: "cors", 
        cache: 'no-cache', 
        credentials: 'same-origin',
       
        redirect: 'follow',
        referrerPolicy: "no-referrer",
      });
      const daysWeather = await response.json();
      await dispatch(daysWeatherAction(daysWeather));
      return daysWeather;
    } catch (error) {
      throw error;
    }
  };

  const fetchCityWeather = async (key = "215854") => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=AEvJItzx62qMCozpuB0nGCsf3izvCzZa&details=true`,
      {
        method: "GET",
        mode: "cors", 
        cache: 'no-cache', 
        credentials: 'same-origin',
       
        redirect: 'follow',
        referrerPolicy: "no-referrer",
      } );
      const cityWeather = await response.json();
      await dispatch(cityWeatherAction(cityWeather));
      return cityWeather;
    } catch (error) {
    throw error;
    }
  };

  return { fetchCitiesArr, fetchDaysWeather, fetchCityWeather };
};

export default useFetch;
