"use client";

import Blog from "@/components/blog/Blog";
import Image from "next/image";
import React, { useState } from "react";


const page = () => {
    const [Tab, setTab] = useState("FEATURED"); // FEATURED, 2024, 2023, 2022 ljljlkjl
    return (
        <main className="w-screen bg-[#F4F4F6]">
            <section className="w-screen flex-col-centered">
                <figure className="relative w-[80vw] h-[20vh] mt-[15vh]">
                    <Image
                        src={"/blog/Our Blog.svg"}
                        alt="A picture of our facility's stations"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                </figure>
                <div className="w-[80vw] py-4 border-b-2 border-black border-opacity-40 flex-row-start">
                    <button
                        className={`text-3xl-responsive pr-4 border-r-2 border-black border-opacity-40 ${
                            Tab === "FEATURED" ? "text-black" : "text-[#999999]"
                        }`}
                        onClick={() => {
                          setTab("FEATURED")
                        }}
                    >
                        FEATURED
                    </button>
                    <button
                        className={`text-3xl-responsive px-4 border-r-2 border-black border-opacity-40 ${
                            Tab === "2024" ? "text-black" : "text-[#999999]"
                        }`}
                        onClick={() => {
                          setTab("2024")
                        }}
                    >
                        2024
                    </button>
                    <button
                        className={`text-3xl-responsive px-4 border-r-2 border-black border-opacity-40 ${
                            Tab === "2023" ? "text-black" : "text-[#999999]"
                        }`}
                        onClick={() => {
                          setTab("2023")
                        }}
                    >
                        2023
                    </button>
                    <button
                        className={`text-3xl-responsive px-4 border-r-2 border-black border-opacity-40 ${
                            Tab === "2022" ? "text-black" : "text-[#999999]"
                        }`}
                        onClick={() => {
                          setTab("2022")
                        }}
                    >
                        2022
                    </button>
                </div>

                <Blog />
            </section>
        </main>
    );
};

export default page;
