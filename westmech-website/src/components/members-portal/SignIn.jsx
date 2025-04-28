"use client";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const SignIn = ({ colour, user }) => {
  const [visible, setVisible] = useState(false);
  let altColour = "#57a8e7";
  if (user === "student") {
    altColour = "#AD88FE";
  }
  useEffect(()=> {
    console.log(colour)
  })
  const greyBorder = "rgb(209 213 219 / var(--tw-border-opacity))";
  return (
    <div className="flex flex-col w-[80%] gap-[12px]">
      <form className="flex flex-col gap-[12px]">
        <h1 className="text-[28px] sm:text-[36px]">Sign In</h1>
        <input
          placeholder="Email"
          type="email"
          required
          onFocus={(e) => (e.target.style.borderColor = colour)}
          onBlur={(e) => (e.target.style.borderColor = greyBorder)}
          className={`border-[1.5px] sm:text-[18px] border-gray-300 focus:outline-none rounded-md p-3 w-[80%]`}
        ></input>
        <div className="relative w-[80%]">
          <input
            placeholder="Password"
            type={`${visible ? "text" : "password"}`}
            required
            onFocus={(e) => (e.target.style.borderColor = colour)}
            onBlur={(e) => (e.target.style.borderColor = greyBorder)}
            className={`border-[1.5px] sm:text-[18px] border-gray-300 focus:outline-none rounded-md p-3 w-full pr-10`}
          />
          {visible ? (
            <BsEye
              onClick={() => setVisible(false)}
              className="absolute h-[20px] w-[20px] right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            />
          ) : (
            <BsEyeSlash
              onClick={() => setVisible(true)}
              className="absolute h-[20px] w-[20px] right-4 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            />
          )}
        </div>
        <button style={{background:colour}} 
         onMouseEnter={(e) => (e.target.style.backgroundColor = altColour)}
         onMouseLeave={(e) => (e.target.style.backgroundColor = colour)}
        className={`text-[18px] sm:text-[18px] text-white rounded-md p-3 w-[80%]`}>
          Sign In
        </button>
        <div className="flex justify-between w-[80%]">
          <div>
            <input type="checkbox" id="remember" className="mr-1" />
            <label htmlFor="remember" className="text-[18px] text-gray-700">
              Remember Me
            </label>
          </div>
          <a
            href="/members-portal/password-reset"
            style={{color:colour}}
            className={`text-[18px] hover:text-[black] cursor-pointer"`}
          >
            Forgot Password?
          </a>
        </div>
      </form>
      <div className="flex items-center my-[8px] w-[80%]">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <button className="flex gap-1 justify-center text-[18px] sm:text-[18px] border-[1.5px] border-gray-300 rounded-md p-3 w-[80%] hover:bg-gray-200">
        <img src="/login/google.svg"></img>
        <p>Continue with Google</p>
      </button>
      <div>
        <p className="text-[18px] mb-1 mt-4">Don't have an account?</p>
        <a
          href="#"
          style={{color:colour}}
          className={`text-[18px] font-medium hover:text-[black] cursor-pointer inline-block`}
        >
          Ask your coach
        </a>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  colour: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default SignIn;
