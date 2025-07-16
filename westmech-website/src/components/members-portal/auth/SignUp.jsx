"use client";
import React from 'react'
import { useState } from 'react';
import {Select, SelectSection, SelectItem} from "@heroui/select";
import { userRoles } from '../../../../config/constants';

const SignUp = () => {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
    });
    const [error, setError] = useState("");
  return (
    <div>
    {error && 
    <div>
        User Exists!!!
    </div>}
        <form className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5">
                <input onChange={prev => ({
                    ...prev,
                    firstname: e.target.value
                })}
                    placeholder="First Name"
                    type="email"
                    required
                    className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3`}
                ></input>
                <input
                    placeholder="Last Name"
                    type="email"
                    required
                    className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3`}
                ></input>
            </div>
            <input
                placeholder="Email"
                type="email"
                required
                className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3`}
            ></input>
            <input
                placeholder="Password"
                type="text"
                required
                className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3`}
            ></input>

            <Select className="max-w-xs" label="Are you a...">
                {userRoles.map((role) => (
                <SelectItem key={role.key}>{role.label}</SelectItem>
                ))}
            </Select>

            <button 
                className={`text-[18px] sm:text-[18px] text-white bg-[#57a8e7] rounded-md p-3`}>
                Sign Up
            </button>
        </form>
    </div>
  )
}

export default SignUp
