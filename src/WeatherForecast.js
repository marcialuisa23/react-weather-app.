import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <div className="col-3">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-3">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-3">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-3">
            <WeatherForecastDay data={forecast[3]} />
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
