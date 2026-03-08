import React from "react";
import { useNavigate } from "react-router-dom";
import { Article } from "../services/article.service";

interface ArticleProps {
  article: Article;
}

export default function ArticlePreview({ article }: ArticleProps) {
  const navigate = useNavigate();

  return (
    <article
      id={`article-${article.id.toString()}`}
      className="surface-card flex cursor-pointer flex-col overflow-hidden p-0 transition duration-200 hover:-translate-y-1"
      onClick={() => navigate(`/article/${article.slug}`)}
    >
      <img
        src={article.imageUrl || "/assets/illustration-article.svg"}
        alt={`${article.title} article illustration`}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <p className="text-sm text-slate-500 dark:text-slate-400">{article.publishedDate}</p>
        <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white">{article.title}</h2>
        <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">{article.summary}</p>
      </div>
    </article>
  );
}
