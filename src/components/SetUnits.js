// SetUnits Component
import React from "react";

const SetUnits = () => {
  return <>
  <div className="set-units">
          <label>UNITS</label>
          <select id="units">
            <option value="C">Celsius</option>
            <option value="F">Fehrenheit</option>
          </select>
        </div>
        </>;
};

export default SetUnits;