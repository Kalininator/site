import Header from "./Header";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col bg-[#1f2c8a] bg-[url('/background-dim.jpg')] bg-cover bg-no-repeat">
      <div className="grow">
        <Header />
        <main className={`mx-auto max-w-screen-md py-8 px-4`}>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
