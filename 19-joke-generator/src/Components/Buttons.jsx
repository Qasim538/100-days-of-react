import React from "react";
import "./Styles.css";

const Buttons = ({getJokeApi}) => {
  return (
      <button 
      onClick={getJokeApi}
      className>Click to Laugh!</button>
  );
};

export default Buttons;
