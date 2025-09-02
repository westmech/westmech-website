import Image from "next/image";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import Space from "@/components/home/Space";
import Programs from "@/components/home/Programs";

export default function Home() {
    return (
        <main className="w-screen bg-[#F4F4F6] pb-10 overflow-x-hidden">
            <Hero />
            <About />
            <Space />
            <Programs />
        </main>
    );
}
