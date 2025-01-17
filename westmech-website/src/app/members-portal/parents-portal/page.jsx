"use client";
import React from "react";
import LeftView from "@/components/members-portal/LeftView";
import PasswordInput from "@/components/members-portal/PasswordInput";
import Input from "@/components/members-portal/Input";
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import { useState } from "react";

const page = () => {
  const bg = "#F4F4F6";
  const [email, setEmail] = useState(""); // Store email input
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false); // error for email
  const [passwordError, setPasswordError] = useState(false); // error for password
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignIn = () => {
    console.log("hi")
    if (!validateEmail(email)) {
      setEmailError(true); // Trigger error state if invalid
    } else {
      setEmailError(false);
    }
  };

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
          <h1 className={`text-[42px] ${emailError ? "mb-3" : "mb-5"} mt-[7rem]`}>Sign In</h1>
          {(emailError || passwordError)  &&(<Alert severity="warning" sx={{backgroundColor:"#FEF0BE", width:"80%", fontSize:"16px", marginBottom:"12px"}}>Your email or password is incorrect. 
            Please check your details and try again.</Alert>)}
          <Input value={email} onChange={(e) => setEmail(e.target.value)} label="Email" mb={2} width={'80%'}></Input>
          <PasswordInput value={password} onChange={(e) => setPassword(e.target.value)} mb={2} width={'80%'}></PasswordInput>
          <div>
            <a href="#" className="text-[22px] font-medium text-[#017FE0] hover:text-[black] cursor-pointer inline-block mb-6">Forgot Password?</a>
          </div>
          <Button sx={{ backgroundColor: "#017FE0", color: "white", cursor: "pointer", display: "inline-block", height: 60, borderRadius: "15px", width: "30%", fontSize: "22px", textTransform: "none", }}  onClick={handleSignIn}>Sign In</Button>
          <div className="mt-6">
            <p className="text-[22px] mb-1">Don't have an account?</p>
            <a href="#" className="text-[22px] font-medium text-[#017FE0] hover:text-[black] cursor-pointer inline-block">Ask your coach</a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
