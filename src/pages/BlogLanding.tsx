import React from "react";
import ArticlePreview from "../components/article-preview";
import BlogLandigHeader from "../components/blog-landing-header";
import Footer from "../components/footer";
import Header from "../components/header";

export default function BlogLanding() {
    return (
        <>
            <Header/>
            <div className="flex p-10 justify-center"><BlogLandigHeader /></div>
            <div className="grid grid-cols-3 gap-2">
                <ArticlePreview ArticleId={1} />
                <ArticlePreview ArticleId={2} />
                <ArticlePreview ArticleId={3} />
                <ArticlePreview ArticleId={4} />
                <ArticlePreview ArticleId={5} />
            </div>
            <Footer />
        </>)
}