"use client";

import { useState } from "react";
import React from "react";
import PropTypes from "prop-types"
import Image from "next/image";


  
const ProfileButton = ({user, iconSrc, colour}) => {
    let w = 76;
    let h = 80;
    let hoverColour = "#57a8e7";
    if (user == "Student") {
        w = 76;
        h = 83;
        hoverColour="#a884e2";
    }
    const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex w-[90%] h-[25%] mb-5 items-center p-4 rounded-lg cursor-pointer" style={{backgroundColor: isHovered ? hoverColour : colour,}}         onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}>
        <Image className="mr-[8%] ml-[8%]"
        src={iconSrc}
        alt="Sign in"
        width={w}
        height={h}
        />
        <div>
            <p className="text-white text-[22px]">Sign in as</p>
            <h1 className="text-white font-bold text-[48px] mt-[-10px]">{user}</h1>
        </div>
  </div>
    );
};

ProfileButton.propTypes = {
  user: PropTypes.string.isRequired,
  iconSrc: PropTypes.string.isRequired,
  colour: PropTypes.string.isRequired,
};


export default ProfileButton;