import Header from "./Header";
import Footer from "./Footer";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="grow">
        <Header />
        <main className="mx-auto max-w-2xl py-16 px-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
