import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkBreaks from "remark-breaks";
import remarkToc from "remark-toc";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import Layout from "./Layout";
import { Article as ArticleType, getArticleBySlug } from "../services/article.service";
import ArticleTag from "../components/ArticleTag";
import ArticleHeroImage from "../components/ArticleHeroImage";
import ArticlePublishedDate from "../components/ArticlePublishedDate";

export default function Article() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [article, setArticle] = useState<ArticleType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) {
        navigate("/blog");
        return;
      }

      try {
        const data = await getArticleBySlug(slug);
        if (!data) {
          navigate("/404");
          return;
        }
        setArticle(data);
      } catch (err) {
        console.error("Error fetching article:", err);
        setError("Failed to load article. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticle();
  }, [slug, navigate]);

  if (loading) {
    return (
      <Layout>
        <div className="site-container flex min-h-[60vh] items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-sky-500" />
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="site-container py-20">
          <div className="surface-card text-center text-red-600 dark:text-red-300">{error}</div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {article && (
        <section className="section-shell">
          <div className="site-container">
            <article className="surface-card mx-auto max-w-4xl">
              <ArticlePublishedDate publishedDate={article.publishedDate} />
              {article.imageUrl && (
                <div className="mt-6">
                  <ArticleHeroImage imageUrl={article.imageUrl} title={article.title} />
                </div>
              )}
              <div className="markdown-content mt-8">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm, remarkBreaks, remarkToc]}
                  rehypePlugins={[rehypeRaw, rehypeSanitize]}
                >
                  {article.content}
                </ReactMarkdown>
              </div>
              {article.tags && article.tags.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <ArticleTag key={tag} tag={tag} />
                  ))}
                </div>
              )}
            </article>
          </div>
        </section>
      )}
    </Layout>
  );
}
