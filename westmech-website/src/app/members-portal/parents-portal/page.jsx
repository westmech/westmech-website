"use client";
import React from "react";
import TitleView from "@/components/members-portal/TitleView";

import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const bg = "#F4F4F6";

  return (
    <main style={{ backgroundColor: bg }} className="sm:min-h-screen w-screen flex flex-col sm:flex-row">
      <TitleView 
        title="PARENTS PORTAL"
        logo="/login/person.svg"
      ></TitleView>
      <div style={{ backgroundColor: bg }} className="mt-8 mb-16 sm:mt-4 sm:mb-8 sm:h-screen flex items-center justify-center sm:w-1/2">
        <div className="flex flex-col w-[80%] gap-[12px]">
          <div className="flex flex-col gap-[12px]">
            <h1 className="text-[28px] sm:text-[36px]">Sign In</h1>
            <input placeholder="Email" type="email" className="border-[1.5px] sm:text-[18px] border-gray-300 focus:border-[#017FE0] focus:outline-none rounded-md p-3 w-[80%]"></input>
            <input placeholder="Password" type="password" className="border-[1.5px] sm:text-[18px] border-gray-300 focus:border-[#017FE0] focus:outline-none rounded-md p-3 w-[80%]"></input>
            <button className="text-[18px] sm:text-[18px] bg-[#017FE0] text-white rounded-md p-3 w-[80%] hover:bg-[#57a8e7]">Sign In</button>
            <div className="flex justify-between w-[80%]">
            <div>
              <input type="checkbox" id="remember" className="mr-1" />
              <label htmlFor="remember"  className="text-[18px] text-gray-700">Remember Me</label>
            </div>
            <a href="#" className="text-[18px] text-[#017FE0] hover:text-[black] cursor-pointer">Forgot Password?</a>
            </div>
          </div>
          <div className="flex items-center my-[8px] w-[80%]">
            <hr className="flex-grow border-t border-gray-300"/>
            <span className="mx-4 text-gray-500">or</span>
            <hr className="flex-grow border-t border-gray-300"/>
          </div>
          <button className="flex gap-1 justify-center text-[18px] sm:text-[18px] border-[1.5px] border-gray-300 rounded-md p-3 w-[80%] hover:bg-gray-200">
            <img src="/login/google.svg"></img>
            <p>Continue with Google</p>
          </button>
          <div>
            <p className="text-[18px] mb-1 mt-4">Don't have an account?</p>
            <a href="#" className="text-[18px] font-medium text-[#017FE0] hover:text-[black] cursor-pointer inline-block">Ask your coach</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;