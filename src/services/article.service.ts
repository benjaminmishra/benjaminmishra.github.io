export interface Article {
    id: number;
    title: string;
    summary: string;
    publishedDate: string;
    imageUrl?: string;
    content: string;
    slug: string;
    tags?: string[];
    category?: string;
}

const API_URL = import.meta.env.REACT_APP_API_URL ? `${import.meta.env.REACT_APP_API_URL}/articles` : '';

// Metadata for our articles
const ARTICLE_METADATA = {
    'building-modern-blog-react-typescript': {
        id: 1,
        title: "Building a Modern Blog with React and TypeScript",
        summary: "Learn how to create a responsive blog using React, TypeScript, and Tailwind CSS with dark mode support",
        publishedDate: "2025-06-02",
        imageUrl: "/assets/illustration-article.svg",
        tags: ["react", "typescript", "web development", "tutorial"],
        category: "Web Development"
    },
    'rust-and-webassembly': {
        id: 2,
        title: "Getting Started with Rust and WebAssembly",
        summary: "Learn how to build high-performance web applications using Rust and WebAssembly",
        publishedDate: "2025-06-01",
        imageUrl: "/assets/illustration-article.svg",
        tags: ["rust", "webassembly", "programming"],
        category: "Programming"
    }
};

export interface PaginatedResponse<T> {
    items: T[];
    total: number;
    page: number;
    pageSize: number;
    totalPages: number;
}

export interface ArticleFilters {
    page?: number;
    pageSize?: number;
    category?: string;
    tag?: string;
    search?: string;
}

export const getArticles = async (filters: ArticleFilters = {}): Promise<PaginatedResponse<Article>> => {
    const { page = 1, pageSize = 9 } = filters;
    
    try {
        if (!API_URL) {
            // Create articles from metadata and markdown files
            const mockArticles = Object.entries(ARTICLE_METADATA).map(([slug, metadata]) => ({
                ...metadata,
                slug,
                content: '' // Content will be loaded on demand in getArticleBySlug
            }));

            // Simulate filtering
            let filteredArticles = [...mockArticles];
            if (filters.category) {
                filteredArticles = filteredArticles.filter(a => a.category === filters.category);
            }
            if (filters.tag) {
                filteredArticles = filteredArticles.filter(a => a.tags?.includes(filters.tag!));
            }
            if (filters.search) {
                const searchLower = filters.search.toLowerCase();
                filteredArticles = filteredArticles.filter(a => 
                    a.title.toLowerCase().includes(searchLower) || 
                    a.summary.toLowerCase().includes(searchLower)
                );
            }

            // Simulate pagination
            const start = (page - 1) * pageSize;
            const end = start + pageSize;
            const paginatedArticles = filteredArticles.slice(start, end);

            return {
                items: paginatedArticles,
                total: filteredArticles.length,
                page,
                pageSize,
                totalPages: Math.ceil(filteredArticles.length / pageSize)
            };
        }

        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Failed to fetch articles');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw error;
    }
};

async function loadMarkdownContent(slug: string): Promise<string> {
    try {
        const response = await fetch(`/articles/${slug}.md`);
        if (!response.ok) throw new Error('Article not found');
        return await response.text();
    } catch (error) {
        console.error('Error loading markdown:', error);
        return '# Article Not Found\n\nSorry, the requested article could not be loaded.';
    }
}

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
    try {
        if (!API_URL) {
            // Get article metadata
            const metadata = ARTICLE_METADATA[slug as keyof typeof ARTICLE_METADATA];
            if (!metadata) return null;

            // Load markdown content
            const content = await loadMarkdownContent(slug);

            // Return complete article
            return {
                ...metadata,
                slug,
                content
            };
        }

        const response = await fetch(`${API_URL}/${slug}`);
        if (!response.ok) {
            if (response.status === 404) {
                return null;
            }
            throw new Error('Failed to fetch article');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching article:', error);
        throw error;
    }
};
