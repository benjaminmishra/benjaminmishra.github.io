import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticlePreview from "../components/ArticlePreview";
import BlogLandingHeader from "../components/blog-landing-header";
import Layout from "./Layout";
import { Article, getArticles, ArticleFilters, PaginatedResponse } from "../services/article.service";

export default function BlogLanding() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [articles, setArticles] = useState<Article[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [pagination, setPagination] = useState<Omit<PaginatedResponse<Article>, 'items'>>({
        total: 0,
        page: 1,
        pageSize: 9,
        totalPages: 0
    });

    const currentPage = Number(searchParams.get('page')) || 1;
    const currentCategory = searchParams.get('category') || '';
    const currentTag = searchParams.get('tag') || '';
    const searchQuery = searchParams.get('search') || '';

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const filters: ArticleFilters = {
                    page: currentPage,
                    pageSize: 9,
                    category: currentCategory || undefined,
                    tag: currentTag || undefined,
                    search: searchQuery || undefined
                };

                const response = await getArticles(filters);
                setArticles(response.items);
                setPagination({
                    total: response.total,
                    page: response.page,
                    pageSize: response.pageSize,
                    totalPages: response.totalPages
                });
                setLoading(false);
            } catch (err) {
                setError('Failed to load articles. Please try again later.');
                setLoading(false);
            }
        };

        fetchArticles();
    }, [currentPage, currentCategory, currentTag, searchQuery]);

    const handlePageChange = (newPage: number) => {
        setSearchParams(prev => {
            prev.set('page', newPage.toString());
            return prev;
        });
    };

    const handleSearch = (query: string) => {
        setSearchParams(prev => {
            if (query) {
                prev.set('search', query);
            } else {
                prev.delete('search');
            }
            prev.set('page', '1');
            return prev;
        });
    };

    return (
        <Layout>
            <div className="flex flex-col p-10">
                <BlogLandingHeader />
                
                {/* Filters */}
                <div className="flex flex-wrap gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search articles..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        className="px-4 py-2 border rounded-lg dark:border-gray-600 bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark"
                    />
                    {/* Add category and tag filters here */}
                </div>
                
                {loading && (
                    <div className="flex justify-center items-center p-10">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                    </div>
                )}
                
                {error && (
                    <div className="flex justify-center items-center p-10">
                        <p className="text-red-500 dark:text-red-400">{error}</p>
                    </div>
                )}
                
                {!loading && !error && (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {articles.map(article => (
                                <ArticlePreview key={article.id} article={article} />
                            ))}
                        </div>

                        {/* Pagination */}
                        {pagination.totalPages > 1 && (
                            <div className="flex justify-center items-center mt-8 gap-2">
                                <button
                                    onClick={() => handlePageChange(pagination.page - 1)}
                                    disabled={pagination.page === 1}
                                    className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                
                                <span className="mx-4 text-text-light dark:text-text-dark">
                                    Page {pagination.page} of {pagination.totalPages}
                                </span>
                                
                                <button
                                    onClick={() => handlePageChange(pagination.page + 1)}
                                    disabled={pagination.page === pagination.totalPages}
                                    className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-text-light dark:text-text-dark disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
                
                {!loading && !error && articles.length === 0 && (
                    <div className="flex justify-center items-center p-10">
                        <p className="text-text-light dark:text-text-dark">No articles found.</p>
                    </div>
                )}
            </div>
        </Layout>
    );
}
