import React from "react";
import styled from "styled-components";

const Switch = ({ darkMode, setDarkMode }) => {
  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <StyledWrapper>
      <label className="switch  ">
        <input type="checkbox" checked={darkMode} onChange={handleDarkMode} />
        <span className="slider" />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  /* The switch - the box around the slider */
  .switch {
    font-size: 10px;
    position: relative;
    display: inline-block;
    width: 3.5em;
    height: 2em;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgb(70, 159, 248);
    box-shadow: inset 2px 5px 10px rgba(0, 0, 0, 0.3);
    transition: 0.4s;
    border-radius: 5px;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 1.4em;
    width: 0.1em;
    border-radius: 0px;
    left: 0.3em;
    bottom: 0.3em;
    background-color: white;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: #171717;
    box-shadow: inset 2px 5px 10px rgb(0, 0, 0);
  }

  input:checked + .slider:before {
    transform: translateX(2.8em) rotate(360deg);
  }
`;

export default Switch;
