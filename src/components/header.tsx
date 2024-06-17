import React from "react";
import Nav from "./nav";
import Logo from "./logo";
import Banner from "./banner";

export default function Header() {
  return (
    <>
      <Banner />
      <div className="flex h-full justify-between md:max-w-full px-4 font-FigTree m-4">
        <Logo />
        <Nav />
      </div>

    </>
  );
}
