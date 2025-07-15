import { Roboto } from "next/font/google";
import ThemeWrapper from "@/components/ui/ThemeWrapper";
import Navbar from "@/components/ui/Navbar";
import { Footer } from "@/components/ui";
import "./globals.css";

const inter = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
    title: "Western Mechatronics | Alberta's Premier Robotics Club",
    description: "westernmech.ca",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} tracking-tight bg-[#F4F4F6] hide-scrollbar`}>
                <ThemeWrapper>
                    <Navbar />
                    {children}
                    <Footer />
                </ThemeWrapper>
            </body>
        </html>
    );
}
