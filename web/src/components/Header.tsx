import React from "react";
import Nav from "./Nav";
import Logo from "./Logo";
import Banner from "./Banner";

export default function Header() {
  return (
    <header className="w-full">
      <Banner />
      <div className="flex h-16 items-center justify-between px-4 font-FigTree bg-white">
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
