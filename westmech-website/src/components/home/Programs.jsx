import React from "react";
import Image from "next/image";
import { programs } from "./programs.json";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Programs = () => {
    return (
        <section className="w-screen flex-col-centered">
            <header className="w-[80vw] flex-row-centered mt-10">
                <p className="w-full flex-row-start text-8xl-responsive font-medium tracking-tighter">
                    New to Robotics?{" "}
                    <span className="text-[#017FE0] ml-8">Start Here.</span>
                </p>
            </header>
            <p className="w-[80vw] text-3xl-responsive mt-2 tracking-tighter">
                Join our intro classes (robotics 101 - 1 day trial)
            </p>
            <div className="w-[80vw] flex-row-start">
                <figure className="flex-row-start w-full gap-16 overflow-x-scroll mt-12">
                    {programs.map((program, key) => (
                        <figure key={key} className="mb-16 hover:cursor-pointer">
                            <figure className="w-[30vw] h-[40vh] relative rounded-2xl overflow-hidden">
                                <Image
                                    src={program.thumbnail}
                                    alt="A picture of our facility's stations"
                                    style={{ objectFit: "cover" }}
                                    fill
                                />
                            </figure>
                            <header className="font-semibold mt-6 text-4xl-responsive">
                                {program.name}
                            </header>
                            <p className="mt-2 text-xl font-light leading-tight">
                                {program.description}
                            </p>
                        </figure>
                    ))}
                </figure>
            </div>

            <div className="w-[80vw] h-full flex-row-end text-xl font-medium mt-16">
                <Button type="text" endIcon={<ArrowRightAltIcon />} href="/programs">
                    See all Programs
                </Button>
            </div>
        </section>
    );
};

export default Programs;
