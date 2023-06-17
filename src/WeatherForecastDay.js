import React from "react";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}°C`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day"> {day()}</div>
      <div className="WeatherForecast-icon">
        {" "}
        <img
          src={props.data.condition.icon_url}
          alt={props.data.condition.description}
        />{" "}
      </div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {" "}
          {maxTemperature()}
        </span>
        <span className="WeatherForecast-temperature-min">
          {" "}
          {minTemperature()}
        </span>
      </div>
    </div>
  );
}
