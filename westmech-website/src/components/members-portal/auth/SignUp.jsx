"use client";
import React from 'react'
import { useState } from 'react';
import {Select, SelectItem} from "@heroui/select";
import { userRoles } from '../../../../config/constants';
import { useRouter } from 'next/navigation';

export default function SignUp() {
    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        role: '',
    });

    const router = useRouter();

    const [error, setError] = useState("");
    const handleSelectionChange = (e) => {
        setUser((prev) => ({
        ...prev,
        role: e.target.value,
        }));
    }
    async function handleSubmit(e) {
        e.preventDefault();
        const formattedFirstname = user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1);
        const formattedLastname = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);
        if (user.password.length < 8) { // finish password validation later
            setError("Password must be greater than 8 characters");
            return;
        }

        // sending to backend 
        try {
            const resAccountExists = await fetch('/api/account-exists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: user.email }),
            });
            
            const { resJSON } = await resAccountExists.json();

            if (resJSON && resJSON.user) {
                setError("Account already exists");
                return;
            }
            
            const res = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: {...user, formattedFirstname, formattedLastname}
                })
            });

        if (res.ok) {
            const form = e.target;
            form.reset();
            setUser({
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                role: '',
            });
            setError("");
            router.replace("/members-portal/sign-in");
        } else {
            console.log("User Registration Failed");
        }
        } catch (error) {
            setError("User Registration Failed")
            console.log("error", error)
        }
    }

  return (
    <div>
    {error && 
    <div className="bg-red-200 text-bg-red-800">
        {error}
    </div>}
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col sm:flex-row gap-5">
                <input  onChange={(e) =>
                        setUser((prev) => ({
                        ...prev,
                        firstName: e.target.value
                        }))
                    }
                    placeholder="First Name"
                    type="text"
                    required
                    className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3`}
                ></input>
                <input  onChange={(e) =>
                        setUser((prev) => ({
                        ...prev,
                        lastName: e.target.value
                        }))
                    }
                    placeholder="Last Name"
                    type="text"
                    required
                    className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3`}
                ></input>
            </div>
            <input   onChange={(e) =>
                    setUser((prev) => ({
                    ...prev,
                    email: e.target.value
                    }))
                }
                placeholder="Email"
                type="email"
                required
                className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3`}
            ></input>
            <input   onChange={(e) =>
                    setUser((prev) => ({
                    ...prev,
                    password: e.target.value
                    }))
                }
                placeholder="Password"
                type="password"
                required
                className={`border-[1.5px] sm:text-[18px] border-gray-300 pointer focus:outline-none rounded-md p-3`}
            ></input>

            <Select required className="max-w-xs" label="Are you a..." style={{background: "white"}}
                    selectedKeys={[user.role]}
                    onChange={handleSelectionChange}
                >
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
