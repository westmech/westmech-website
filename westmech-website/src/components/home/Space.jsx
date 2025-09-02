"use client";

import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { useToast } from "../ui/ToastProvider";

const Space = () => {
    const toast = useToast();
    
    if (!toast) {
        console.error("useToast returned null/undefined");
        return <div>Toast not available</div>;
    }
    
    const { showInfo } = toast;

    const handleBookVisitClick = () => {
        showInfo("🏢 Visit booking form coming soon! Contact us directly to schedule a tour.");
    };

    return (
        <section className="w-screen flex-col-centered px-4 sm:px-0">
            <header className="w-full sm:w-[80vw] flex flex-col sm:flex-row sm:items-center pb-8 gap-4 sm:gap-0">
                <div className="w-full sm:w-1/2 flex-col-start text-lg sm:text-2xl order-2 sm:order-1">
                    <p className="mt-0 sm:mt-6 ml-0 sm:ml-6">
                        We are proud to house the{" "}
                        <span className="inline text-[#017FE0]">biggest</span>{" "}
                        robotics education facility in the city
                    </p>
                </div>
                <aside className="w-full sm:w-1/2 flex-row-start sm:flex-row-end text-8xl-responsive font-medium tracking-tighter order-1 sm:order-2">
                    Our Space
                </aside>
            </header>

            <figure className="flex flex-col sm:flex-row sm:justify-center h-auto sm:h-[80vh] w-full sm:w-[80vw] gap-4 sm:gap-8 relative overflow-hidden">
                <figure className="relative h-[40vh] sm:h-full w-full sm:w-[30vw] overflow-hidden rounded-xl">
                    <Image
                        src="/home/tall_left.jpg"
                        alt="A picture of our facility's stations"
                        style={{objectFit: "cover"}}
                        fill
                    />
                </figure>
                <div className="flex flex-col justify-center gap-4 sm:gap-8 h-auto sm:h-full">
                    <figure className="relative h-[30vh] sm:h-1/2 w-full sm:w-[50vw] overflow-hidden rounded-xl">
                        <Image
                            src="/home/top_right.jpg"
                            alt="A picture of our facility's practice fields"
                            style={{objectFit: "cover"}}
                            fill
                        />
                    </figure>
                    <figure className="relative h-[30vh] sm:h-1/2 w-full sm:w-[50vw] overflow-hidden rounded-xl">
                        <Image
                            src="/home/bottom_right.jpg"
                            alt="A picture of our facility's parts walls"
                            style={{objectFit: "cover"}}
                            fill
                        />
                    </figure>
                </div>
            </figure>

            <div className="border-b-[1px] mt-8 sm:mt-16 pb-8 sm:pb-16 border-black min-h-[60px] sm:h-10 w-full sm:w-[80vw] flex flex-col sm:flex-row sm:items-center relative font-medium text-lg sm:text-xl gap-4 sm:gap-0">
                <div className="flex items-center">
                    <figure className="h-6 w-6 sm:h-10 sm:w-10 relative flex-shrink-0">
                        <Image
                            src="/home/pin.svg"
                            alt="Navigation pin"
                            className=""
                            style={{objectFit: "contain"}}
                            fill
                        />
                    </figure>
                    <span className="flex items-center ml-2 sm:ml-4 text-sm sm:text-xl">4144 Macleod Trail SE Unit C, Calgary, AB</span>
                </div>

                <div className="w-full flex justify-start sm:justify-end">
                    <Button type="text" endIcon={<ArrowRightAltIcon />} sx={{fontWeight: 'bold'}} onClick={handleBookVisitClick}>Book a visit</Button>
                </div>
            </div>
        </section>
    );
};

export default Space;
