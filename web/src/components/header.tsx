import React from "react";
import Nav from "./Nav";
import Logo from "./logo";
import Banner from "./banner";

export default function Header() {
  return (
    <>
      <Banner />
      <div className="flex h-full items-center justify-between md:max-w-full px-4 font-FigTree bg-white dark:bg-blue-900 dark:text-white">
        <Logo />
        <Nav />
      </div>
    </>
  );
}
