"use client";
import React from "react";
import LeftView from "@/components/members-portal/LeftView";
import PasswordInput from "@/components/members-portal/PasswordInput";
import Input from "@/components/members-portal/Input";
import Button from '@mui/material/Button';


const page = () => {
  const bg = "#F4F4F6";

  return (
    <main style={{ backgroundColor: bg }} className="w-screen h-screen flex relative">
      <LeftView 
        title="PARENTS PORTAL"
        logoSrc="/login/person.svg"
        logoWidth={150}
        logoHeight={150}
      ></LeftView>
      <div style={{ backgroundColor: bg }} className="w-1/2 h-full flex items-center justify-center">
        <div className="h-full w-full flex flex-col ml-[10%] mt-[15%]">
          <h1 className="text-[42px] mt-[7rem] mb-5">Sign In</h1>
          <Input label="Email" mb={2} width={'80%'}></Input>
          <PasswordInput mb={2} width={'80%'}></PasswordInput>
          <div>
            <a href="#" className="text-[22px] font-medium text-[#017FE0] hover:text-[black] cursor-pointer inline-block mb-10">Forgot Password?</a>
          </div>
          <Button sx={{backgroundColor:"#017FE0", color:"white", cursor:"pointer", display:"inline-block", height:60, borderRadius:"15px", width:"30%", fontSize:"22px", textTransform: "none",}}>Sign In</Button>
          <div className="mt-10">
            <p className="text-[22px] mb-1">Don't have an account?</p>
            <a href="#" className="text-[22px] font-medium text-[#017FE0] hover:text-[black] cursor-pointer inline-block">Ask your coach</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
