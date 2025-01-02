"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const Navbar = () => {
    const location = usePathname();
    const [active, setActive] = useState(String(location.pathname));
    const [transition, setTransition] = useState(false);
    const [hidden, setHidden] = useState(false);
    const [menu, setMenu] = useState(false);

    const { scrollY } = useScroll();

    useEffect(() => {
        setActive(`/${String(location).split("/")[1]}`);
    });


    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious();
        if (latest > previous && latest > 0) {
            setHidden(true);
            console.log("hide");
        } else {
            setHidden(false);
            console.log("show");
        }
    });

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="w-screen h-16 bg-[#F4F4F6] flex-col-centered z-50 fixed top-0"
        >
            <div className="w-[80vw] flex-row-centered h-14">
                <figure className="w-1/3 flex-row-start">
                    <div className="relative w-40 h-14 -ml-4">
                        <Image
                            src="/nav/westmech logo.svg"
                            alt="western mechatronics logo"
                            style={{objectFit: "contain"}}
                            fill
                        />
                    </div>
                </figure>
                <section className="w-1/3 flex-row-centered">
                    {[
                        ["Home", "/"],
                        ["About", "/about"],
                        ["Programs", "/programs"],
                        ["Blog", "/blog"],
                    ].map(([title, url]) => (
                        <a
                            href={url}
                            className={`${
                                active === url
                                    ? "text-black underline"
                                    : "text-[#939393]"
                            } rounded-lg px-3 py-2`}
                        key={title}
                        >
                            {title}
                        </a>
                    ))}
                </section>

                <figure className="w-1/3 flex-row-end">
                    <button className="w-40 h-10 bg-[#017FE0] rounded-full text-white font-light">
                        Register Now
                    </button>
                </figure>
            </div>
        </motion.nav>
    );
};

export default Navbar;
