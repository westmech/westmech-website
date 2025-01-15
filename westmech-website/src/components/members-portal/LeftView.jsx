import Image from "next/image";
import React from "react";
import PropTypes from "prop-types"

  
const LeftView = ({title, logoSrc, logoWidth, logoHeight}) => {
  return (
    <div className="w-1/2 h-100 flex items-center justify-center" style={{background: "linear-gradient(to bottom, #017FE0 60%, #5EACE9)"}}>
      <div className="text-center flex flex-col items-center">
        <Image 
            src={logoSrc}
            alt="Sign in as person"
            width={logoWidth}
            height={logoHeight}
            />
          <div className="w-[330px] mt-2">
            <p className="text-white text-[70px] font-bold">
              {title.split("\n")[0]}
            </p>
            <p>
              {title.split("\n")[1]}
            </p>
          </div>
        </div>
        <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src="/login/tab.svg"
            alt="Sign in as person"
            width={100}
            height={100}
        />
      </div>
    );
};

LeftView.propTypes = {
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
};


export default LeftView;