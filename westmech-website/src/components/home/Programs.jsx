import React from "react";
import Image from "next/image";
import programsData from "./programs.json";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Programs = () => {
    const { programs } = programsData;
    
    return (
        <section className="w-screen flex-col-centered px-4 sm:px-0">
            <header className="w-full sm:w-[80vw] flex-row-centered mt-10">
                <p className="w-full flex flex-col sm:flex-row sm:items-center text-8xl-responsive font-medium tracking-tighter">
                    <span>New to Robotics?</span>{" "}
                    <span className="text-[#017FE0] ml-0 sm:ml-8">Start Here.</span>
                </p>
            </header>
            <p className="w-full sm:w-[80vw] text-3xl-responsive mt-2 tracking-tighter">
                Join our intro classes (robotics 101 - 1 day trial)
            </p>
            <div className="w-full sm:w-[80vw] flex-row-start">
                <figure className="flex-row-start w-full gap-8 sm:gap-16 overflow-x-scroll mt-8 sm:mt-12 pb-4">
                    {programs.map((program, key) => (
                        <figure key={key} className="mb-8 sm:mb-16 hover:cursor-pointer flex-shrink-0">
                            <figure className="w-[80vw] sm:w-[30vw] h-[30vh] sm:h-[40vh] relative rounded-2xl overflow-hidden">
                                <Image
                                    src={program.thumbnail}
                                    alt="A picture of our facility's stations"
                                    style={{ objectFit: "cover" }}
                                    fill
                                />
                            </figure>
                            <header className="font-semibold mt-4 sm:mt-6 text-4xl-responsive max-w-[80vw] sm:max-w-[30vw]">
                                {program.name}
                            </header>
                            <p className="mt-2 text-lg sm:text-xl font-light leading-tight max-w-[80vw] sm:max-w-[30vw]">
                                {program.description}
                            </p>
                        </figure>
                    ))}
                </figure>
            </div>

            <div className="w-full sm:w-[80vw] h-full flex justify-center sm:justify-end text-lg sm:text-xl font-medium mt-8 sm:mt-16">
                <Button type="text" endIcon={<ArrowRightAltIcon />} href="/programs">
                    See all Programs
                </Button>
            </div>
        </section>
    );
};

export default Programs;
