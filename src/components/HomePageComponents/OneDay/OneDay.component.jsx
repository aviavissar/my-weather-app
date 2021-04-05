import React from "react";
import moment from "moment";

const OneDayWeatherComponent = (props) => (
  <div className="forecast one_day">
    <h5 className="day">{moment(props.dayName).format("dddd")}</h5>
    <div className="day">{moment(props.dayName).format(" D MMM YYYY")}</div>
    <div className="forecast-icon">
      <img src={`/images/icons/icon-${props.dayIcon}.svg`} alt="" />
    </div>
    <div className="degree">
      {props.dayTemp}
      <sup>o</sup>
      {props.temUnit}
    </div>
    <h5>{props.dayPhrase}</h5>
  </div>
);

export default OneDayWeatherComponent;
