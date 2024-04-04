import React from "react";
import { ReactSVG } from "react-svg";
import "./DarkMode.css";
import SunSvg from "./Sun.svg";
import MoonSvg from "./Moon.svg";

const DarkMode = () => {
  const setDarkMode = () => {
    document.querySelector("body").setAttribute("data-theme", "dark");
  };
  const setLightMode = () => {
    document.querySelector("body").setAttribute("data-theme", "light");
  };
  const toggleTheme = (e) => {
    if (e.target.checked) setDarkMode();
    else setLightMode();
  };
  return (
    <div className="dark_mode">
      <input
        className="dark_mode_input"
        type="checkbox"
        id="darkmode-toggle"
        onChange={toggleTheme}
      />
      <label className="dark_mode_label" htmlFor="darkmode-toggle">
        <ReactSVG src={SunSvg} />
        <ReactSVG src={MoonSvg} />
      </label>
    </div>
  );
};

export default DarkMode;
