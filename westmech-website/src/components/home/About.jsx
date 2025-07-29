import React from "react";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const About = () => {
    return (
        <section className="w-screen h-[50vh] flex-row-centered">
            <div className="w-[80vw] flex-row-centered border-b-[1px] pb-16 border-black">
                <aside className="w-1/3 flex-row-start text-8xl-responsive font-medium tracking-tighter">
                    About Us
                </aside>
                <header className="w-2/3 flex-col-centered text-2xl">
                    <p className="mt-6">
                        <span className="inline text-[#017FE0]">Westmech</span> is a robotics club located in Calgary. We
                        aim to make robotics accessible to students K-12 through
                        our camps, events, and club programs.
                    </p>
                    <div className="w-full flex-row-start gap-5 text-[#161616] mt-4">
                        {/* // TODO: Add link to buttons */}
                        <Button type="primary">
                        Sign up for a class
                        </Button>
                        <Button type="secondary" endIcon={<ArrowRightAltIcon />}>
                        See upcoming events
                        </Button>
                    </div>
                </header>
            </div>
        </section>
    );
};

export default About;
