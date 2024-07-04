import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";
import React from "react";

test("Navigation Bar contains three links",()=>{
    render(
        <Nav/>
    );

    const homeLink = screen.getByText("Work Experience");
    expect(homeLink).toBeInTheDocument();
});