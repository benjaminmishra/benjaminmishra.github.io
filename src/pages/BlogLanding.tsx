import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ArticlePreview from "../components/ArticlePreview";
import BlogLandingHeader from "../components/BlogLandingHeader";
import Layout from "./Layout";
import { Article, getArticles, ArticleFilters, PaginatedResponse } from "../services/article.service";

export default function BlogLanding() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [pagination, setPagination] = useState<Omit<PaginatedResponse<Article>, "items">>({
    total: 0,
    page: 1,
    pageSize: 9,
    totalPages: 0,
  });

  const currentPage = Number(searchParams.get("page")) || 1;
  const searchQuery = searchParams.get("search") || "";

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        setError(null);

        const filters: ArticleFilters = {
          page: currentPage,
          pageSize: 9,
          search: searchQuery || undefined,
        };

        const response = await getArticles(filters);
        setArticles(response.items);
        setPagination({
          total: response.total,
          page: response.page,
          pageSize: response.pageSize,
          totalPages: response.totalPages,
        });
      } catch (_err) {
        setError("Failed to load articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [currentPage, searchQuery]);

  const setParam = (key: string, value?: string) => {
    const next = new URLSearchParams(searchParams);
    if (value) {
      next.set(key, value);
    } else {
      next.delete(key);
    }
    next.set("page", key === "page" ? value || "1" : "1");
    setSearchParams(next);
  };

  return (
    <Layout>
      <section className="section-shell">
        <div className="site-container">
          <BlogLandingHeader />
          <div className="surface-card mb-8">
            <label htmlFor="article-search" className="mb-3 block text-sm font-medium text-slate-700 dark:text-slate-200">
              Search articles
            </label>
            <input
              id="article-search"
              type="text"
              placeholder="Search by title, summary, or topic"
              value={searchQuery}
              onChange={(e) => setParam("search", e.target.value)}
              className="text-input"
            />
          </div>

          {loading && (
            <div className="surface-card flex justify-center p-10">
              <div className="h-8 w-8 animate-spin rounded-full border-b-2 border-sky-500" />
            </div>
          )}

          {error && (
            <div className="surface-card text-center text-red-600 dark:text-red-300">
              {error}
            </div>
          )}

          {!loading && !error && articles.length > 0 && (
            <>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {articles.map((article) => (
                  <ArticlePreview key={article.id} article={article} />
                ))}
              </div>

              {pagination.totalPages > 1 && (
                <div className="mt-10 flex items-center justify-center gap-3">
                  <button
                    onClick={() => setParam("page", String(pagination.page - 1))}
                    disabled={pagination.page === 1}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-200"
                  >
                    Previous
                  </button>
                  <span className="text-sm text-slate-600 dark:text-slate-300">
                    Page {pagination.page} of {pagination.totalPages}
                  </span>
                  <button
                    onClick={() => setParam("page", String(pagination.page + 1))}
                    disabled={pagination.page === pagination.totalPages}
                    className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700 dark:text-slate-200"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}

          {!loading && !error && articles.length === 0 && (
            <div className="surface-card text-center text-slate-600 dark:text-slate-300">
              No articles found.
            </div>
          )}
        </div>
      </section>
    </Layout>
  );
}
