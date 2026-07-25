import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  title: {
    default: "Western Mechatronics Robotics Club",
    template: "%s — Western Mechatronics",
  },
  description:
    "WestMech is a robotics club in Calgary, Alberta. We make robotics accessible to students in Grades 3 to University through our camps, events, and classes.",
  metadataBase: new URL("https://westernmech.ca"),
  openGraph: {
    title: "Western Mechatronics Robotics Club",
    description:
      "Making robotics accessible to Calgary students from Grade 3 through University.",
    type: "website",
    locale: "en_CA",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:ital,wght@0,400;0,500;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a className="skip-link" href="#main">
          Skip to main content
        </a>
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
