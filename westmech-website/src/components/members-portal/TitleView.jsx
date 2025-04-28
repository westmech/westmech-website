import Image from "next/image";
import React from "react";
import PropTypes from "prop-types";

const TitleView = ({ user, title, logo }) => {
  let bgColour = "linear-gradient(to bottom, #017FE0 60%, #5EACE9)";
  if (user === "student") {
    bgColour = "linear-gradient(to bottom, #7F48D7 60%, #AD88FE)";
  }
  return (
    <div
      className={`p-10 flex items-center justify-center sm:w-1/2`}
      style={{ background: bgColour}}
    >
      <div className="text-center flex flex-col items-center">
        <img
          className="w-[107px] h-[83px] sm:w-[215px] sm:h-[166px]"
          src={logo}
          alt="Sign in as person"
        />
        <div className="mt-2 flex flex-col">
          <p className="text-white text-[35px] sm:text-[70px] font-bold">
            {title.split(" ")[0]}
          </p>
          <p className="text-white text-[35px] sm:text-[70px] font-bold">
            {title.split(" ")[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

TitleView.propTypes = {
  user: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};

export default TitleView;
