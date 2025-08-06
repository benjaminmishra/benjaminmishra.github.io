import { render, screen } from "@testing-library/react";
import React from "react";
import ArticlePreview from "../components/ArticlePreview";
import { MemoryRouter } from "react-router-dom";
import { Article } from "../services/article.service";

const mockArticle: Article = {
    id: 1,
    title: "Test Title",
    summary: "Test Summary",
    publishedDate: "2025-01-01",
    content: "Test Content",
    slug: "test-title",
    imageUrl: "/assets/illustration-article.svg"
};

test("Test Article Preview Has Id", () => {
    const renderResult = render(
        <MemoryRouter>
            <ArticlePreview article={mockArticle} />
        </MemoryRouter>
    );

    //check if article has id
    const articleDiv = renderResult.container.querySelector(`#article-${mockArticle.id}`);
    expect(articleDiv).toBeInTheDocument();
});

test("Test Article Preview has illustration image", () => {
    render(
        <MemoryRouter>
            <ArticlePreview article={mockArticle} />
        </MemoryRouter>
    );

    // check if illustration image is there and visible
    const imageElement = screen.getByAltText("article illustration")
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toBeVisible();
});
