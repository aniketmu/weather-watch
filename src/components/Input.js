import React from "react";

const Input = (props) => {
  return <>
 <div className="input-box">
        <span className="label">LOCATION</span>
        <input type="text" onKeyUp={evt => props.getResults(evt)}></input>
      </div>
  </>;
};

export default Input;
