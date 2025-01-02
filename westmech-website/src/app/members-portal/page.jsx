import React from "react";
import LeftView from "@/components/login/LeftView";
import ProfileButton from "@/components/login/ProfileButton";

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
      <Image className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
            src="/login/tab.svg"
            alt="Sign in as person"
            width={100}
            height={100}
        />
      <div style={{ backgroundColor: bg }} className="w-1/2 h-full flex items-center justify-center">
        <div className="h-full w-full flex flex-col ml-[10%]">
          <h1 className="text-[42px] mt-[7rem]">Welcome</h1>
          <p className="text-[22px] mb-5">Select a sign in option to get started</p>
          <ProfileButton className="mb-5" user="Parent" iconSrc="/login/person.svg" colour={darkblue}></ProfileButton>
          <ProfileButton user="Student" iconSrc="/login/student.svg" colour={purple}></ProfileButton>
          <p className="text-[22px] mb-1">Don't have an account?</p>
          <p className="text-[22px] font-bold text-[black] hover:text-[#017FE0] cursor-pointer">Ask your coach</p>
        </div>
      </div>
    </main>
  );
};

export default page;
