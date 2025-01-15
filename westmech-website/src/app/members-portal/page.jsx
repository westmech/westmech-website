import React from "react";
import LeftView from "@/components/members-portal/LeftView";
import ProfileButton from "@/components/members-portal/ProfileButton";

import Image from "next/image";

const page = () => {
  const bg = "#F4F4F6";
  const darkblue = "#017FE0";
  const purple="#7F48D7";
  return (
    <main style={{ backgroundColor: bg }} className="w-screen h-screen flex relative">
      <LeftView 
        title="MEMBERS PORTAL"
        logoSrc="/login/westmech logo.svg"
        logoWidth={215}
        logoHeight={166}
      ></LeftView>
      <div style={{ backgroundColor: bg }} className="w-1/2 h-full flex items-center justify-center">
        <div className="h-full w-full flex flex-col ml-[10%]">
          <h1 className="text-[42px] mt-[7rem]">Welcome</h1>
          <p className="text-[22px] mb-5">Select a sign in option to get started</p>
          <ProfileButton className="mb-5" user="Parent" iconSrc="/login/person.svg" colour={darkblue}></ProfileButton>
          <ProfileButton user="Student" iconSrc="/login/student.svg" colour={purple}></ProfileButton>
          <p className="text-[22px] mb-1">Don't have an account?</p>
          <a href="#" className="text-[22px] font-medium text-[#017FE0] hover:text-[black] cursor-pointer inline-block">Ask your coach</a>
        </div>
      </div>
    </main>
  );
};

export default page;
