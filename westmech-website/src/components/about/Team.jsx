import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Team = () => {
    return (
        <div className="relative w-screen bg-[#F4F4F6] flex flex-col items-center pt-[7vh]">
            {/* Large rotated background text, visible only on md and up */}
            <header className="hidden md:block absolute top-0 mt-[140vh] -rotate-90 text-black text-opacity-5 text-[50vh] left-0 ml-[30vw] pointer-events-none">
                WESTMECH
            </header>

            <section className="w-[90vw] flex flex-col md:flex-row items-start justify-center">
                {/* Left column */}
                <div className="w-full md:w-[35vw] md:pr-[5vw] flex flex-col items-center">
                    <figure className="relative w-full h-[30vh] md:h-[40vh] mb-6">
                    <Image
                        src={"/about/Meet the Team.svg"}
                        alt="Meet the Team"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                    </figure>

                    <h2 className="text-2xl md:text-3xl text-center md:text-left tracking-tight mb-6">
                    Western Mechatronics was founded in 2019 by high school friends who recognized the need for robotics education.
                    </h2>

                    <figure className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] xl:h-screen mb-10">
                    <Image
                        src={"/about/Vishal.png"}
                        alt="Vishal"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                    </figure>

                    <figure className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] xl:h-screen mb-10">
                    <Image
                        src={"/about/Ian.png"}
                        alt="Ian"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                    </figure>
                </div>

                {/* Right column */}
                <aside className="w-full md:w-[35vw] md:pl-[5vw] flex flex-col items-center md:mt-16 lg:mt-20 xl:mt-24">
                    <figure className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] xl:h-screen mb-10">
                    <Image
                        src={"/about/Jonathan.png"}
                        alt="Jonathan"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                    </figure>

                    <figure className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] xl:h-screen mb-10">
                    <Image
                        src={"/about/Justin.png"}
                        alt="Justin"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                    </figure>

                    <figure className="relative w-full h-[40vh] md:h-[60vh] lg:h-[80vh] xl:h-screen mb-10">
                    <Image
                        src={"/about/Vivian.png"}
                        alt="Vivian"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                    </figure>
                </aside>
            </section>


            {/* Sponsors Section */}
            <section className="flex flex-col items-center w-[90vw] mt-10">
                <figure className="relative w-[60vw] h-[15vh] mb-4">
                    <Image
                        src={"/about/Our Sponsors.svg"}
                        alt="Our Sponsors"
                        style={{ objectFit: "contain" }}
                        fill
                    />
                </figure>
                <div className="border-t-2 border-black border-opacity-30 w-[70vw]">
                    <figure className="relative w-full h-[20vh] my-3 md:my-10">
                        <Image
                            src={"/about/sponsors/Logos.png"}
                            alt="Sponsors Logos"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                </div>
            </section>

            <footer className="w-full h-[40vh] md:h-[60vh] bg-[#017fe0] flex flex-col items-center justify-center relative overflow-hidden px-4">
                {/* Only show cubes on md screen and larger */}
                <figure className="hidden md:block absolute right-0 -mr-[20vw]">
                    <figure className="w-[50vw] h-[50vw] relative">
                        <Image
                            src={"/subfooters/cube wireframe.png"}
                            alt="Decorative cube"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                </figure>
                <figure className="hidden md:block absolute left-0 -mb-[20vh] -ml-[20vw] rotate-180">
                    <figure className="w-[50vw] h-[50vw] relative">
                        <Image
                            src={"/subfooters/cube wireframe.png"}
                            alt="Decorative cube"
                            style={{ objectFit: "contain" }}
                            fill
                        />
                    </figure>
                </figure>

                <header className="text-white text-5xl tracking-tighter font-medium text-center mb-4 px-2">
                    Want to work with us?
                </header>

                <Button 
                    type="secondary"
                    endIcon={<ArrowRightAltIcon />}
                    sx={{
                        width: '75%',
                        maxWidth: 900,
                        height: 'fit-content',
                        my: 2,
                        border: '1px solid #FFFFFF',
                        color: '#FFFFFF',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, .1)',
                            transform: "translateY(-1px)",
                            boxShadow: "0 4px 12px rgba(255, 255, 225, 0.1)",
                        },
                        transition: "all 0.2s ease",
                    }}
                    href="https://www.westernmech.ca/partnership">
                    Become a Partner
                </Button>
            </footer>
        </div>
    );
};

export default Team;
