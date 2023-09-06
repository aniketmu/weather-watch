import React from "react";

const WeatherReport = (props) => { // Use props as the parameter
const { location, conditions, icon, temp_c, temp_f, temp_min, wind_speed, wind_direction, pressure, humidity } = props
  return (
    <>
      <div className="weather-report">
        <h2 className="big">{location}</h2>
        <h3 className="conditions">
          {conditions}
        </h3>
        <img src={icon} alt="weather-icon" />
        <div className="temperature">
          <div>
            <p>TEMPERATURE IN CELIUS</p>
            <h2>{temp_c}</h2>
          </div>
          <div>
            <p>TEMPERATURE IN FAHRENHEIT</p>
            <h2>{temp_f}</h2>
          </div>
          {/* <div>
            <p>MINIMUM TEMPERATURE</p>
            <h2>{temp_min}</h2>
          </div> */}
        </div>
        <div className="wind">
          <div>
            <p>WIND SPEED</p>
            <h2>{wind_speed}</h2>
          </div>
          <div>
            <p>WIND DIRECTION</p>
            <h2>{wind_direction}</h2>
          </div>
        </div>
        <div className="pressure">
          <div>
            <p>PRESSURE</p>
            <h2>{pressure}</h2>
          </div>
          <div>
            <p>HUMIDITY</p>
            <h2>{humidity}</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherReport;
