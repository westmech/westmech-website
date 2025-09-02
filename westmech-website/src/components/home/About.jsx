"use client";

import React from "react";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useToast } from "../ui/ToastProvider";

const About = () => {
    const toast = useToast();
    
    if (!toast) {
        console.error("useToast returned null/undefined");
        return <div>Toast not available</div>;
    }
    
    const { showSuccess, showInfo } = toast;

    const handleSignUpClick = () => {
        showSuccess("🎉 Class registration form will open soon! We'll notify you when enrollment begins.");
    };

    const handleEventsClick = () => {
        showInfo("📅 Loading upcoming events and workshops...");
    };

    return (
        <section className="w-screen min-h-[50vh] flex-row-centered py-8 sm:py-0">
            <div className="w-full sm:w-[80vw] px-4 sm:px-0 flex flex-col sm:flex-row sm:items-center border-b-[1px] pb-8 sm:pb-16 border-black gap-6 sm:gap-0">
                <aside className="w-full sm:w-1/3 flex-row-start text-8xl-responsive font-medium tracking-tighter">
                    About Us
                </aside>
                <header className="w-full sm:w-2/3 flex-col-centered text-lg sm:text-2xl">
                    <p className="mt-0 sm:mt-6">
                        <span className="inline text-[#017FE0]">Westmech</span> is a robotics club located in Calgary. We
                        aim to make robotics accessible to students K-12 through
                        our camps, events, and club programs.
                    </p>
                    <div className="w-full flex flex-col sm:flex-row gap-3 sm:gap-5 text-[#161616] mt-4">
                        <Button type="primary" onClick={handleSignUpClick}>
                        Sign up for a class
                        </Button>
                        <Button type="secondary" endIcon={<ArrowRightAltIcon />} onClick={handleEventsClick}>
                        See upcoming events
                        </Button>
                    </div>
                </header>
            </div>
        </section>
    );
};

export default About;
