import { render, screen } from "@testing-library/react";
import React from "react";
import ArticlePreview from "../components/ArticlePreview";

test("Test Article Preview Has Id",()=>{
    const renderResult = render(
        <ArticlePreview ArticleId={1}/>
    );

    //check if article has id
    const articleDiv = renderResult.container.querySelector(`#Article-${1}`);
    expect(articleDiv).toBeInTheDocument();
});

test("Test Article Preview has illustration image",()=>{
    render(
        <ArticlePreview ArticleId={1}/>
    );

    // check if illustration image is there and visible
    const imageElement = screen.getByAltText("illustration")
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toBeVisible();
});