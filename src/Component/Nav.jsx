import React from "react";
import Slider from "./Slider";

const Nav = () => {
  return (
    <div className="flex bg-[#05050A] w-full text-white justify-between p-2">
      <h1 className="text-2xl ">TASKS</h1>
      <ul className="flex gap-8 pr-2 items-center">
        <li>Home</li>
        <li>Your Tasks</li>
        <Slider />
      </ul>
    </div>
  );
};

export default Nav;
