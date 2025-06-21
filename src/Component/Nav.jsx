import React from "react";
import Slider from "./Slider";

const Nav = ({ darkMode, setDarkMode }) => {
  return (
    <div className={!darkMode?"dark flex  bg-[#05050A] w-full text-white justify-between p-2":" navlight flex w-full text-white justify-between p-2"}>
      <h1 className="text-2xl font-semibold">TASKS</h1>
      <ul className="flex gap-8 pr-2 items-center font-semibold">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Your Tasks</li>
        <Slider darkMode={darkMode} setDarkMode={setDarkMode}/>
      </ul>
    </div>
  );
};

export default Nav;
