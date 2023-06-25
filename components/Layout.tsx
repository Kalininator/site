import Header from "./Header";
import React from "react";
import { Gugi } from "@next/font/google";

// const gugi = Gugi({
//   variable: "--font-gugi",
//   weight: "400",
// });

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-[#1f2c8a] bg-[url('/background-dim.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="grow">
        <Header />
        <main className={`mx-auto max-w-screen-md py-8 px-4`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
