import React from "react"
import illustration from "../assets/illustration-article.svg";
import avatar from "../assets/image-avatar.webp";
import { addListener } from "process";

interface ArticleProps {
    ArticleId: number
}

export default function ArticlePreview({ ArticleId }: ArticleProps) {

    const Article = {
        illustration: illustration,
        publishedDate: "21 Dec 2023",
        title: "HTML & CSS foundations",
        summary: "These languages are the backbone of every website, defining structure, content, and presentation."
    }

    const handleOnClick = () => {
        alert(`Navigating away to blog post ${ArticleId}`);
    }

    return (
        <div 
        id={`Article-${ArticleId.toString()}`} 
        className='flex flex-col justify-center bg-white m-6 p-4 border-2 border-black shadow-[10px_10px_0px_1px_rgba(0,0,0,1)] font-FigTree text-base'
        onClick={handleOnClick}>
            <img src={Article.illustration} alt='illustration' />
            <div className='mt-4'>
                <p className='mt-2 font-bold'>
                    {Article.publishedDate}
                </p>
                <h2 className='font-extrabold text-[20px] mt-2 mb-2 hover:text-Yellow hover:cursor-pointer'>
                    {Article.title}
                </h2>
                <p className='text-Grey'>
                    {Article.summary}
                </p>
            </div>
        </div>
    )
}