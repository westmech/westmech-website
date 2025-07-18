import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Team = () => {
    return (
        <div className="relative w-screen bg-[#F4F4F6] flex-col-centered pt-[10vh]">
            <header className="absolute top-0 mt-[140vh] -rotate-90 text-black text-opacity-5 text-[50vh] left-0 ml-[30vw] pointer-events-none">
                WESTMECH
            </header>
            <section className="w-[80vw] flex flex-row items-start justify-center">
                <div className="w-[35vw] pr-[5vw] flex flex-col items-center justify-start gap-20">
                    <figure className="relative w-full h-[40vh]">
                        <Image
                            src={"/about/Meet the Team.svg"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                    <h2 className="text-3xl-responsive w-full tracking-tighter">
                        Western Mechatronics was founded in 2019 by high school
                        friends who recognized the need for robotics education.
                    </h2>
d
                    <figure className="relative w-full h-screen">
                        <Image
                            src={"/about/Vishal.png"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>

                    <figure className="relative w-full h-screen">
                        <Image
                            src={"/about/Ian.png"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                </div>
                <aside className="w-[35vw] pl-[5vw] flex flex-col items-center justify-start gap-20">
                    <figure className="relative w-full h-screen">
                        <Image
                            src={"/about/Jonathan.png"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>

                    <figure className="relative w-full h-screen">
                        <Image
                            src={"/about/Justin.png"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>

                    <figure className="relative w-full h-screen">
                        <Image
                            src={"/about/Vivian.png"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                </aside>
            </section>
            <section className="flex-col-centered">
                <figure className="relative w-[30vw] mr-[50vw] ml-[10vw] h-[20vh] mt-[5vh]">
                    <Image
                        src={"/about/Our Sponsors.svg"}
                        alt="A picture of our facility's stations"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                </figure>
                <div className="border-t-2 border-b-2 border-black border-opacity-30 w-[70vw]">
                    <figure className="relative w-[70vw] h-[30vh] my-16">
                        <Image
                            src={"/about/sponsors/Logos.png"}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
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
                <header className="text-white text-7xl-responsive tracking-tighter font-medium">
                    Want to work with us?
                </header>
                {/* TODO: link to partnership page
                current page: "https://www.westernmech.ca/partnership" */}
                <Button 
                    type="secondary"
                    endIcon={<ArrowRightAltIcon />}
                    sx={{
                        width: '35%',
                        height: 'fit-content',
                        my: 2,
                        border: '1px solid #FFFFFF',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, .1)',
                        },
                    }}
                    href="https://www.westernmech.ca/partnership">
                    Become a Partner
                </Button>
            </footer>
        </div>
    );
};

export default Team;
