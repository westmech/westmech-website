"use client";
import React from "react";
import { useState } from "react";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import { useRouter } from "next/navigation";

const page = () => {
  const [visible, setVisible] = useState(false);
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const router = useRouter();

  // navigating back button
  const handleNavigate = () => {
    router.push("/members-portal");
  };

  return (
    <main
      style={{ background: "linear-gradient(to bottom, #017FE0 60%, #5EACE9)" }}
      className="sm:min-h-screen w-screen flex justify-center items-center"
    >
      <div className="flex flex-col min-w-[40%] bg-[#F4F4F6] min-h-[500px] items-center p-8 rounded-[35px] gap-[16px]">
        <div className="w-[80%]">
          <div className="flex flex-row mb-6">
            <div className="flex items-center h-[53.4] mr-2">
              <BsArrowLeft
                onClick={() => handleNavigate()}
                className="w-[30px] h-[30px] rounded-[50%] hover:bg-gray-200"
              />
            </div>

            <img
              src="/nav/westmech logo.svg"
              className="w-[58.13px] h-[53.4]"
            ></img>
          </div>
          <h1 className="text-[28px] mb-3">Create New Password</h1>
          <p>To reset your password, enter a new one below.</p>
        </div>
        <form className="flex flex-col w-full items-center gap-[16px]">
          <div className="relative w-[80%]">
            <input
              placeholder="New password"
              type={`${visible ? "text" : "password"}`}
              required
              value={newPass}
              onChange={(e) => setNewPass(e.target.value)}
              className="border-[1.5px] sm:text-[18px] border-gray-300 focus:border-[#017FE0] focus:outline-none rounded-md p-3 w-full pr-10"
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
          <input
            placeholder="Confirm new password"
            type="password"
            required
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            className="border-[1.5px] sm:text-[18px] border-gray-300 focus:border-[#017FE0] focus:outline-none rounded-md p-3 w-[80%]"
          ></input>
          <button className="text-[18px] sm:text-[18px] bg-[#017FE0] text-white rounded-md p-3 hover:bg-[#57a8e7] w-[80%]">
            Update Password
          </button>
        </form>

        {confirmPass !== newPass && confirmPass !== "" && newPass !== "" && (
          <p className="text-[#CC1111] w-[80%]">
            The passwords do not match. Please try again.
          </p>
        )}
      </div>
    </main>
  );
};

export default page;
