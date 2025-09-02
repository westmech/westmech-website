"use client";

import React, { useState } from 'react';
import Image from "next/image";
import { Dropdown } from '@/components/ui';

const Hero = () => {

    const [selectedValue, setSelectedValue] = useState('');
    const [value, setValue] = useState('');
    const handleChange = (event) => {
        // randome stuff
    };
    const hasError = value === '';

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        { label: 'Option 3', value: 'option3' },
    ];

    return (
        <section className="w-screen flex-col-centered pt-16 px-4 sm:px-0">
            <header className="relative w-full sm:w-[80vw] min-h-[120px] sm:h-[20vw] flex-col-left font-medium tracking-tighter text-9xl-responsive">
                <p className="leading-tight">Building The Next</p>
                <p className="leading-tight">Generation's <span className="bg-clip-text bg-gradient-to-r from-[#0F86E1] to-[#7DBCEC] text-transparent pr-4">Engineers</span></p>
                
            </header>

            <Dropdown options={options} value={selectedValue} onChange={(value) => setSelectedValue(value)} placeholder="Select an option" />


            <figure className="relative w-full sm:w-[80vw] h-[50vh] sm:h-[90vh] rounded-xl overflow-hidden mt-6 sm:mt-0">
                <Image
                    src="/home/hero.png"
                    alt="background picture of a robot"
                    style={{objectFit: "cover"}}
                    fill
                    priority
                />
            </figure>
        </section>
    );
};

export default Hero;
