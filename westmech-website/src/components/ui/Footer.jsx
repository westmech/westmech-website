import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <div className="w-full h-[50vh] bg-[#171717] z-50 flex-col-centered text-white">
            <div className="w-[90vw] h-2/3 border-b-2 border-white border-opacity-40 flex flex-row items-end justify-start">
                <div className="flex-col-left font-light text-xl gap-6 mr-12 mb-10">
                    <span>Contact Us</span>
                    <span>info@westernmech.ca</span>
                    <span>403-991-3277</span>
                </div>
                <div>
                    <div className="flex-col-left font-light text-xl gap-6 mb-10">
                        <span>Follow Us</span>
                        <figure className="flex-row-centered">
                            <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                                <Image
                                    src={"/footer/Instagram Icon.svg"}
                                    alt="A picture of our facility's stations"
                                    style={{ objectFit: "cover" }}
                                    fill
                                />
                            </figure>
                            <span>Instagram</span>
                        </figure>
                        <figure className="flex-row-centered">
                            <figure className="w-[1.5vw] h-[1.5vw] relative overflow-hidden mr-2">
                                <Image
                                    src={"/footer/Youtube Icon.svg"}
                                    alt="A picture of our facility's stations"
                                    style={{ objectFit: "cover" }}
                                    fill
                                />
                            </figure>
                            <span>Youtube</span>
                        </figure>
                    </div>
                    <div></div>
                </div>
            </div>
            <div className="w-[90vw] h-1/3 flex flex-row text-xl pt-[8vh] font-light">
                <span>@2024</span>
                <div className="w-full flex flex-row items-start justify-end">
                    <span>westernmech.ca</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;