"use client";

import { useState } from "react";
import React from "react";
import PropTypes from "prop-types";

const ProfileButton = ({ user, iconSrc, colour, onClick }) => {
  let hoverColour = "#57a8e7";
  if (user == "Student") {
    hoverColour = "#a884e2";
  }
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="flex w-full pt-4 pb-4 sm:pb-6 sm:pt-6 sm:h-[25%] mb-5 items-center rounded-lg cursor-pointer"
      style={{ backgroundColor: isHovered ? hoverColour : colour }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <img
        className="mr-[8%] ml-[8%] w-[53px] h-[56px] sm:w-[76px] sm:h-[80px]"
        src={iconSrc}
        alt="Sign in"
      />
      <div>
        <p className="text-white text-[18px] sm:text-[24px]">Sign in as</p>
        <h1 className="text-white font-medium text-[36px] sm:text-[48px] mt-[-10px]">
          {user}
        </h1>
      </div>
    </div>
  );
};

ProfileButton.propTypes = {
  user: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default ProfileButton;
