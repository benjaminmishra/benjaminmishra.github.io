import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import remarkBreaks from 'remark-breaks';
import remarkToc from 'remark-toc';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import Layout from './Layout';
import { Article as ArticleType, getArticleBySlug } from '../services/article.service';

export default function Article() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [article, setArticle] = useState<ArticleType | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            if (!slug) {
                navigate('/blog');
                return;
            }

            try {
                const data = await getArticleBySlug(slug);
                if (!data) {
                    navigate('/404');
                    return;
                }
                setArticle(data);
                setLoading(false);
            } catch (err) {
                console.error("Error fetching article:", err); // Log the error for debugging
                setError('Failed to load article. Please try again later.');
                setLoading(false);
            }
        };

        fetchArticle();
    }, [slug, navigate]);

    // Render loading state
    if (loading) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
            </Layout>
        );
    }

    // Render error state
    if (error) {
        return (
            <Layout>
                <div className="flex justify-center items-center min-h-screen">
                    <p className="text-red-500 dark:text-red-400">{error}</p>
                </div>
            </Layout>
        );
    }

    // Render article content
    return (
        <Layout>
            {article && ( // Ensure article is not null after loading
                <article className="max-w-4xl mx-auto px-4 py-8">
                    <div className="prose prose-xl dark:prose-invert max-w-none">
                        {article.imageUrl && (
                            <img
                                src={article.imageUrl}
                                alt={article.title}
                                className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8"
                            />
                        )}

                        <p className="text-sm text-text-light dark:text-text-dark opacity-75">
                            Published on {new Date(article.publishedDate).toLocaleDateString()}
                        </p>

                        <div className="markdown-content">
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm, remarkBreaks, remarkToc]}
                                rehypePlugins={[rehypeRaw, rehypeSanitize]}
                            >
                                {article.content}
                            </ReactMarkdown>
                        </div>
                    </div>

                    {article.tags && article.tags.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {article.tags.map(tag => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm text-text-light dark:text-text-dark"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    )}
                </article>
            )}
        </Layout>
    );
}