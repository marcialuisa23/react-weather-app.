import React, { useState } from "react";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col">
            <div className="WeatherForecast-day"> {forecast[0].time}</div>
            <div className="WeatherForecast-icon">
              {" "}
              <img
                src={forecast[0].condition.icon_url}
                alt={forecast[0].condition.description}
              />{" "}
            </div>
            <div className="WeatherForecast-temperatures">
              <span className="WeatherForecast-temperature-max">
                {" "}
                {forecast[0].temperature.maximum}°
              </span>
              <span className="WeatherForecast-temperature-min">
                {" "}
                {forecast[0].temperature.minimum}°
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2500ff940720t52b8co404b3bd5325a6";
    let city = props.city;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
