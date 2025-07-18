import Image from "next/image";
import React from "react";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Space = () => {
    return (
        <section className="w-screen flex-col-centered">
            <header className="w-[80vw] flex-row-centered pb-8">
                <div className="w-1/2 flex-col-start text-2xl">
                    <p className="mt-6 ml-6">
                        We are proud to house the{" "}
                        <span className="inline text-[#017FE0]">biggest</span>{" "}
                        robotics education facility in the city
                    </p>
                </div>
                <aside className="w-1/2 flex-row-end text-8xl-responsive font-medium tracking-tighter">
                    Our Space
                </aside>
            </header>

            <figure className="flex-row-centered h-[80vh] w-[80vw] gap-8 relative overflow-hidden">
                <figure className="relative h-full w-[30vw] overflow-hidden rounded-xl">
                    <Image
                        src="/home/tall_left.jpg"
                        alt="A picture of our facility's stations"
                        style={{objectFit: "cover"}}
                        fill
                    />
                </figure>
                <div className="flex-col-centered gap-8 h-full">
                    <figure className="relative h-1/2 w-[50vw] overflow-hidden rounded-xl">
                        <Image
                            src="/home/top_right.jpg"
                            alt="A picture of our facility's practice fields"
                            style={{objectFit: "cover"}}
                            fill
                        />
                    </figure>
                    <figure className="relative h-1/2 w-[50vw] overflow-hidden rounded-xl">
                        <Image
                            src="/home/bottom_right.jpg"
                            alt="A picture of our facility's parts walls"
                            style={{objectFit: "cover"}}
                            fill
                        />
                    </figure>
                </div>
            </figure>

            <div className="border-b-[1px] mt-16 pb-16 border-black h-10 w-[80vw] flex-row-start relative font-medium text-xl">
                <figure className="h-10 w-10 relative">
                    <Image
                        src="/home/pin.svg"
                        alt="Navigation pin"
                        className=""
                        style={{objectFit: "contain"}}
                        fill
                    />
                </figure>

                <span className="h-full w-full flex-row-start ml-4">4144 Macleod Trail SE Unit C, Calgary, AB</span>

                <div className="w-full h-full flex-row-end">
                    {/* // TODO: Add link to button */}
                    <Button type="text" endIcon={<ArrowRightAltIcon />} sx={{fontWeight: 'bold'}}>Book a visit</Button>
                </div>
            </div>
        </section>
    );
};

export default Space;
