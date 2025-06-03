import { render, screen } from "@testing-library/react";
import React from "react";
import ArticlePreview from "../components/ArticlePreview";
import { MemoryRouter } from "react-router-dom";

test("Test Article Preview Has Id",()=>{
    const renderResult = render(
 <MemoryRouter>
 <ArticlePreview article={1}/>
 </MemoryRouter>
    );
 
    //check if article has id
    const articleDiv = renderResult.container.querySelector(`#Article-${1}`);
    expect(articleDiv).toBeInTheDocument();
});

test("Test Article Preview has illustration image",()=>{
    render(
 <MemoryRouter>
 <ArticlePreview ArticleId={1}/>
 </MemoryRouter>
    );
 
    // check if illustration image is there and visible
    const imageElement = screen.getByAltText("illustration")
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toBeVisible();
});