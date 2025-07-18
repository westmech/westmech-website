import Image from "next/image";
import Carousel from "./Carousel";
import React from "react";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Programs = () => {
    return (
        <div className="relative w-screen bg-[#F4F4F6] flex-col-centered pt-[10vh]">
            <section className="w-[80vw] flex flex-col items-start justify-center">
                <header className="relative w-[80vw] h-[20vw] flex-col-centered text-9xl-responsive font-medium tracking-tighter -mt-16">
                    <p>
                        Our{" "}
                        <span className="bg-clip-text bg-gradient-to-r from-[#0F86E1] to-[#7DBCEC] text-transparent pr-4">
                            Programs
                        </span>
                    </p>
                </header>

                <h2 className="text-7xl-responsive font-medium tracking-tighter w-[60vw]">
                    Introductory robotics programs for students Grades 7-12
                </h2>

                <Carousel />

                <h2 className="text-7xl-responsive font-medium tracking-tighter w-[60vw]">
                    Introductory robotics programs for students Grades 1-6
                </h2>

                <div className="text-[#7A7A7B] tracking-tighter text-5xl-responsive pt-8 pb-[20vh] mt-6 border-t-2 border-black w-[80vw] px-4 leading-tight">
                    <span>
                        Western Mechatronics offers programming for students
                        grades 6 -12.
                    </span>

                    <p className="mt-10">
                        Programs for students in grades 1 - 6 are offered by our
                        sister organization,{" "}
                        <a className="text-[#017FE0] underline">
                            NEXT Robotics.
                        </a>
                    </p>
                </div>

                <h2 className="text-7xl-responsive font-medium tracking-tighter w-[60vw]">
                    Competition Programs
                </h2>

                <div className="flex-row-centered text-[#7A7A7B] tracking-tighter text-5xl-responsive pt-8 pb-[20vh] mt-6 border-t-2 border-black w-[80vw] leading-tight">
                    <figure className="h-[100vh] w-1/2 relative">
                        <Image
                            src="/programs/H image.png"
                            alt="Navigation pin"
                            className=""
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                    <div className="w-1/2 px-10">
                        <span>
                            Take your robotics experience to the next level with
                            our competition team program.
                        </span>
                        <p className="mt-10">
                            Programs are designed for students have gone through
                            our introductory classes and want to take their
                            robots to tournaments and compete against other
                            organizations from across the world.
                        </p>
                        {/* TODO: add link */}
                        <Button type="secondary" endIcon={<ArrowRightAltIcon/>} sx={{width: 'fit-content', mt: 2}}> See Competitions</Button>
                    </div>
                </div>
            </section>
            <footer className="w-full h-[60vh] bg-[#017fe0] flex-col-centered overflow-hidden relative">
                <figure className="absolute right-0 -mr-[20vw]">
                    <figure className="w-[50vw] h-[50vw] relative">
                        <Image
                            src={"/subfooters/cube wireframe.png"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                </figure>
                <figure className="absolute left-0 -mb-[20vh] -ml-[20vw] rotate-180">
                    <figure className="w-[50vw] h-[50vw] relative">
                        <Image
                            src={"/subfooters/cube wireframe.png"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                </figure>

                <header className="text-white text-7xl-responsive tracking-tighter">
                    Looking for Programs at your School?
                </header>

                <button className="w-[60vw] h-[8vw]  text-white text-9xl-responsive tracking-tighter mb-8 mt-4">
                Learn More <a className="underline">Here</a>
                </button>
                <h2 className="text-[#FAFAFA] text-opacity-65 text-4xl-responsive tracking-tighter w-[30vw] text-center">
                    We host month-long residency programs for students in grades
                    1-6.
                </h2>
            </footer>
        </div>
    );
};

export default Programs;
