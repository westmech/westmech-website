"use client";
import React from "react";
import TitleView from "@/components/members-portal/TitleView";
import ProfileButton from "@/components/members-portal/ProfileButton";
import { useRouter } from "next/navigation";


const page = () => {
  const router = useRouter();
  const bg = "#F4F4F6";
  const darkblue = "#017FE0";
  const purple="#7F48D7";
  function handleNavigate(userType) {
    if (userType == "parent") {
      console.log("hi")
      router.push("members-portal/parents-portal");
    }
  }
  return (
    <main style={{ backgroundColor: bg }} className="sm:min-h-screen w-screen flex flex-col sm:flex-row">
      <TitleView 
        title="MEMBERS PORTAL"
        logo="/login/westmech logo.svg"
      ></TitleView>
      <div style={{ backgroundColor: bg }} className="mt-8 mb-16 sm:mt-4 sm:mb-8 sm:h-screen flex items-center justify-center sm:w-1/2">
        <div className="flex flex-col w-[80%]">
          <h1 className="text-[28px] sm:text-[42px] font-medium">Welcome</h1>
          <p className="text-[18px]  sm:text-[24px] mb-5">Select a sign in option to get started</p>
          <ProfileButton onClick={() => handleNavigate("parent")} className="mb-5" user="Parent" iconSrc="/login/person.svg" colour={darkblue}></ProfileButton>
          <ProfileButton onClick={() => handleNavigate("student")} user="Student" iconSrc="/login/student.svg" colour={purple}></ProfileButton>
          <p className="text-[18px] sm:text-[24px] mb-1">Don't have an account?</p>
          <a href="#" className="text-[18px] sm:text-[24px] font-medium text-[#017FE0] hover:text-[black] cursor-pointer inline-block">Ask your coach</a>
        </div>
      </div>
    </main>
  );
};

export default page;
