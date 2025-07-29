import React from "react";
import { blog } from "./blog.json";
import Image from "next/image";
import Button from "../button/Button";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const Blog = () => {
    return (
        <div className="w-[80vw] flex-col-left">
            {blog.map((item, key) => (
                <article
                    key={key}
                    className="py-16 border-b-2 w-full border-black border-opacity-40 flex flex-row"
                >
                    <figure className="w-[30vw] h-[50vh] relative overflow-hidden">
                        <Image
                            src={item.thumbnail}
                            alt="A picture of our facility's stations"
                            style={{ objectFit: "cover" }}
                            fill
                        />
                    </figure>
                    <div className="text-black ml-10 w-[50vw] pr-[10vw] h-full">
                        <h2 className="text-4xl-responsive font-normal mb-10">
                            {item.date}
                        </h2>
                        <header className="text-6xl-responsive font-medium tracking-tighter">
                            {item.name}
                        </header>
                        <p className="text-3xl-responsive opacity-50">
                            {item.description}
                        </p>
                        <Button type="text" endIcon={<ArrowRightAltIcon />}> Read More</Button>
                    </div>
                </article>
            ))}
            <Button type="text" endIcon={<ArrowRightAltIcon/>} sx={{ fontSize: "1.5rem", mt: 1, mb: 10 }}>
                ALL BLOGS
            </Button>
        </div>
    );
};

export default Blog;
