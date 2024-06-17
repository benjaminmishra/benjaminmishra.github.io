import { render, screen } from "@testing-library/react";
import Nav from "../components/nav";
import React from "react";

test("Navigation Bar contains three links",()=>{
    render(
        <Nav/>
    );

    const links = screen.getAllByRole("a");
    links.forEach(x=>expect(x).toBeDefined());
});