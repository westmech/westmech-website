import React from 'react'
import SignUp from '@/components/members-portal/auth/SignUp'

const page = () => {
  const bg = "#F4F4F6";
  return (
    <main
      style={{ backgroundColor: bg }}
      className="sm:min-h-screen w-screen flex flex-col sm:flex-row overflow-y-auto mt-[-96px]"
    >
    <div className="flex flex-col sm:w-[50%] bg-gradient-to-b from-[#017FE0] to-[#5EACE9] items-center justify-center sm:mt-[-100px] mt-[100px] sm:py-0 py-10">
      <img
        className="w-[107px] h-[83px] sm:w-[215px] sm:h-[166px]"
        src={"/login/westmech logo.svg"}
        alt="Sign in"
      />
      <p className="text-white text-[35px] sm:text-[70px] font-bold sm:inline hidden">SIGN UP</p>
    </div>
      <div
        className="mb-16 sm:h-screen h-1/2 sm:w-[50%] flex justify-center items-center"
      >
        <SignUp></SignUp>
        </div>
    </main>
  )
}

export default page
