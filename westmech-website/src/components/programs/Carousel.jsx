import React from "react";
import GirlPowered from "./slides/GirlPowered";
import OneDayTrial from "./slides/OneDayTrial";
import SummerCamp from "./slides/SummerCamp";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Carousel = () => {
    return (
        <div className="w-screen my-10 mb-32">
            <article className="w-screen flex flex-row items-center justify-start gap-10">
                <GirlPowered />
                <OneDayTrial />
                <SummerCamp />
            </article>
            <h3 className="w-[80vw] flex flex-row items-center justify-center text-black text-4xl-responsive gap-1 mt-24">
            {/* TODO: link buttons (to carosel elements?) */}
            <Button type="text" disabled sx={{ fontSize: '2rem' }}>01</Button>
            <Button type="text" disabled sx={{ fontSize: '2rem' }}>02</Button>
            <Button type="text" disabled sx={{ fontSize: '2rem' }}>03</Button>
            <Button type="text" disabled sx={{ fontSize: '2rem' }}>
                <ArrowRightAltIcon disabled sx={{ fontSize: '2rem' }} />
            </Button>
  
            </h3>
        </div>
    );
};

export default Carousel;
