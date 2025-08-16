import { render, screen, waitFor } from '@testing-library/react';
import { useParams, MemoryRouter } from 'react-router-dom';
import Article from '../pages/Article';
import * as ArticleService from '../services/article.service';
import React from 'react';

jest.mock('../components/Banner', () => () => <div data-testid="banner-mock" />);

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

// Mock the article service
jest.mock('../services/article.service', () => ({
  getArticleBySlug: jest.fn(),
}));

const mockUseParams = useParams as jest.Mock;
const mockGetArticleBySlug = ArticleService.getArticleBySlug as jest.Mock;

describe('Article Page', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockUseParams.mockReset();
    mockGetArticleBySlug.mockReset();
  });

  it('should display loading state initially', () => {
    mockUseParams.mockReturnValue({ slug: 'test-article' });
    mockGetArticleBySlug.mockReturnValue(new Promise(() => {})); // Never resolve to keep it in loading state

    const { container } = render(
      <MemoryRouter>
        <Article />
      </MemoryRouter>
    );

    expect(container.querySelector('.animate-spin')).toBeInTheDocument();
  });

  it('should display error message if article fetching fails', async () => {
    mockUseParams.mockReturnValue({ slug: 'test-article' });
    const errorMessage = 'Failed to load article. Please try again later.';
    mockGetArticleBySlug.mockRejectedValue(new Error(errorMessage));

    render(
      <MemoryRouter>
        <Article />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(errorMessage)).toBeInTheDocument();
    });
  });

  it('should render article content when fetching is successful', async () => {
    mockUseParams.mockReturnValue({ slug: 'test-article' });
    const mockArticleContent = '# Test Article\nThis is the content.';
    const mockArticle = {
      content: mockArticleContent,
      publishedDate: '2025-01-01',
      title: 'Test Article',
    } as any;
    mockGetArticleBySlug.mockResolvedValue(mockArticle);

    const { container } = render(
      <MemoryRouter>
        <Article />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(container.textContent).toContain('This is the content.');
    });
  });

  it('should call getArticle with the correct slug from URL parameters', async () => {
    const articleSlug = 'another-test-article';
    mockUseParams.mockReturnValue({ slug: articleSlug });
    const mockArticleContent = 'Content for another article.';
    const mockArticle = { content: mockArticleContent } as any;
    mockGetArticleBySlug.mockResolvedValue(mockArticle);

    render(
      <MemoryRouter>
        <Article />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(mockGetArticleBySlug).toHaveBeenCalledWith(articleSlug);
    });
  });
});