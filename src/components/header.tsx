import { Popover } from "@headlessui/react";
import React from "react";
import Nav from "../components/nav";
import Logo from "./logo";

export default function Header() {
  return (
    <Popover>
      <div className="relative px-4 pt-6 sm:px-6 lg:px-8">
        <div className="flex flex-shrink-0 flex-grow lg:flex-grow-0">
          <div className="flex w-full items-end justify-between md:max-w-full">
            <Logo />
            <Nav />
          </div>
        </div>
      </div>
    </Popover>
  );
}
