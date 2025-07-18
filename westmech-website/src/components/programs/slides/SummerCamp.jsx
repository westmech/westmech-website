import Image from "next/image";
import React from "react";
import Button from "../../button/Button";

const SummerCamp = () => {
    return (
        <div className="w-[30vw] h-[80vh] overflow-hidden relative">
            <figure className="w-full h-2/3 relative border-4 border-[#00000069]">
                <Image
                    src="/programs/carousel/empty.png"
                    alt="Navigation pin"
                    className=""
                    style={{ objectFit: "cover" }}
                    fill
                />
            </figure>
            <header className="text-5xl-responsive font-medium tracking-tighter mt-4">
                Summer Camp
            </header>
            <p className="text-3xl-responsive tracking-tighter text-black text-opacity-50 mt-4">
                Our premiere program. Join a team of 3-4 students and build your
                very first robot. Registration for 2024 Open now.
            </p>
            <Button
                type="secondary"
                sx={{
                    position: "absolute",
                    bottom: 2,
                }}
                href="https://robotics.dreamclass.io/pages/admissions/form/ElzosS"
                target="_blank">
                Register Now
            </Button>
        </div>
    );
};

export default SummerCamp;
