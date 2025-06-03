import { render, screen } from "@testing-library/react";
import Nav from "../components/Nav";
import React from "react";
import { MemoryRouter } from "react-router-dom";

test("Navigation Bar contains three links",()=>{
    render(
        <MemoryRouter>
            <Nav/>
        </MemoryRouter>
    );

    const homeLink = screen.getByText("Work Experience");
    expect(homeLink).toBeInTheDocument();
});