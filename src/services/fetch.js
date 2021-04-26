import consts from "../consts";
import toastr from "toastr";


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


export const fetchCitiesArr = async (query = "Tel-Aviv") => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${API_APP_KEY}&q=${query}`
      );
      const city = await response.json();
  
      return city;
    } catch (error) {
      throw error;
    }
  };

  export const fetchDaysWeather = async (key = "215854") => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${API_APP_KEY}&metric=true`
      );
      const daysWeather = await response.json();
      return daysWeather;
    } catch (error) {
      throw error;
    }
  };

  export const fetchCityWeather = async (key = "215854") => {
    try {
      const response = await fetch(
        `https://dataservice.accuweather.com/currentconditions/v1/${key}?apikey=${API_APP_KEY}&details=true`
      );
      const cityWeather = await response.json();
      return cityWeather;
    } catch (error) {
      throw error;
    }
  };

 
