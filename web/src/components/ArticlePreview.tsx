import React from "react"
import { useNavigate } from "react-router-dom";
import { Article } from "../services/article.service";

interface ArticleProps {
    article: Article;
}

export default function ArticlePreview({ article }: ArticleProps) {
    const navigate = useNavigate();

    const handleOnClick = () => {
        navigate(`/article/${article.slug}`);
    }

    return (
        <div
            id={`article-${article.id.toString()}`}
            className='flex flex-col justify-center bg-background-light dark:bg-background-dark m-6 p-4 border-2 border-text-light dark:border-text-dark shadow-[10px_10px_0px_1px_rgba(0,0,0,1)] dark:shadow-[10px_10px_0px_1px_rgba(255,255,255,0.8)] font-FigTree text-base cursor-pointer transition-transform hover:scale-105'
            onClick={handleOnClick}>
            <img
                src={article.imageUrl || "/assets/illustration-article.svg"}
                alt='article illustration'
                className="w-full h-48 object-cover rounded"
            />
            <div className='mt-4'>
                <p className='text-sm text-text-light dark:text-text-dark opacity-75'>{article.publishedDate}</p>
                <h2 className='font-bold text-xl mt-2 text-text-light dark:text-text-dark'>{article.title}</h2>
                <p className='mt-2 text-text-light dark:text-text-dark opacity-90'>{article.summary}</p>
            </div>
        </div>
    );
}