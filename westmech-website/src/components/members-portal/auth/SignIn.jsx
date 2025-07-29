"use client";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Input } from "../../ui/input/Input";
import { PasswordInput } from "@/components/ui/input/PasswordInput";
import { Title } from "@/components/ui/headings/Headings";

const SignIn = ({ colour, user }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  let altColour = "#57a8e7";
  if (user === "student") {
    altColour = "#AD88FE";
  }
  useEffect(()=> {
    console.log(colour)
  })

  const handleSubmit = async(e) => {
    e.preventDefault();
    try { 
      const res = await signIn("credentials", {
        email, 
        password, 
        redirect: false
      });
      if (res.error) {
        setError("Invalid Credentials");
        console.log("Invalid Credentials");
        return;
      }
      router.replace("/");
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="flex flex-col w-[70%] gap-5">
      <form className="flex flex-col gap-[12px]" onSubmit={handleSubmit}>
        <Title title="Sign In"/>
        <Input
          placeholder="Email"
          onChange={e => setEmail(e.target.value)}
          type="email"
          required={true}
        />
        <PasswordInput
          placeholder="Password"
          onChange={e => setPassword(e.target.value)}
        />
        <button style={{background:colour}} 
         onMouseEnter={(e) => (e.target.style.backgroundColor = altColour)}
         onMouseLeave={(e) => (e.target.style.backgroundColor = colour)}
        className={`text-[18px] sm:text-[18px] text-white rounded-md p-3`}>
          Sign In
        </button>
        <div className="flex justify-between">
          <div>
            <input type="checkbox" id="remember" className="mr-1" />
            <label htmlFor="remember" className="text-[18px] text-gray-700">
              Remember Me
            </label>
          </div>
          <Link
            href="/members-portal/password-reset"
            style={{color:colour}}
            className={`text-[18px] hover:text-[black] cursor-pointer"`}
          >
            Forgot Password?
          </Link>
        </div>
      </form>
      <div className="flex items-center my-[8px]">
        <hr className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500">or</span>
        <hr className="flex-grow border-t border-gray-300" />
      </div>
      <button className="flex gap-1 justify-center text-[18px] sm:text-[18px] border-[1.5px] border-gray-300 rounded-md p-3 hover:bg-gray-200">
        <img src="/login/google.svg"></img>
        <p>Continue with Google</p>
      </button>
      <div>
        <p className="text-[18px] mb-1 mt-4">Don't have an account?</p>
        <Link
          href="/members-portal/create-account"
          style={{color:colour}}
          className={`text-[18px] font-medium hover:text-[black] cursor-pointer inline-block`}
        >
          Create Account
        </Link>
      </div>
    </div>
  );
};

SignIn.propTypes = {
  colour: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
};

export default SignIn;
