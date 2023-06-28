import Header from "./Header";
import React from "react";
import { Source_Sans_3, Gugi } from "@next/font/google";

const sourceSansPro = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

const gugi = Gugi({
  display: "swap",
  weight: "400",
  variable: "--font-gugi",
});

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="flex min-h-screen flex-col bg-[#1f2c8a] bg-[url('/background-dim.jpg')] bg-cover bg-no-repeat">
    <div className="flex min-h-screen flex-col">
      <div className="grow">
        <Header />
        <main
          className={`mx-auto max-w-screen-md py-8 px-4 ${sourceSansPro.variable} ${gugi.variable} font-sans`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
