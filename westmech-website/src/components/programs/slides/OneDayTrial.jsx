import Image from "next/image";
import React from "react";
import Button from "../../button/Button";

const OneDayTrial = () => {
    return (
        <div className="w-[30vw] h-[80vh] overflow-hidden relative">
            <figure className="w-full h-2/3 relative border-4 border-[#00000069]">
                <Image
                    src="/programs/carousel/1 day trial.png"
                    alt="Navigation pin"
                    className=""
                    style={{ objectFit: "cover" }}
                    fill
                />
            </figure>
            <header className="text-5xl-responsive font-medium tracking-tighter mt-4">
                1-Day Trial
            </header>
            <p className="text-3xl-responsive tracking-tighter text-black text-opacity-50 mt-4">
                Build a robot at our facility and see for yourself if robotics
                is for you! Book a meeting today!
            </p>
            <Button
                type="secondary"
                sx={{
                    position: "absolute",
                    bottom: 10,
                }}
                href="https://robotics.dreamclass.io/pages/admissions/form/kpSJZk"
                target="_blank">
                Book Meeting
            </Button>
        </div>
    );
};

export default OneDayTrial;
