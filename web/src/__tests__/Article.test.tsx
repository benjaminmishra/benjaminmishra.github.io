import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import Article from '../pages/Article';
import * as ArticleService from '../services/article.service';
import React from 'react';

// Mock react-router-dom
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

// Mock the article service
jest.mock('../services/article.service', () => ({
  getArticle: jest.fn(),
}));

const mockUseParams = useParams as jest.Mock;
const mockGetArticle = ArticleService.getArticles as jest.Mock;

describe('Article Page', () => {
  beforeEach(() => {
    // Reset mocks before each test
    mockUseParams.mockReset();
    mockGetArticle.mockReset();
  });

  it('should display loading state initially', () => {
    mockUseParams.mockReturnValue({ articleSlug: 'test-article' });
    mockGetArticle.mockReturnValue(new Promise(() => {})); // Never resolve to keep it in loading state

    render(<Article />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should display error message if article fetching fails', async () => {
    mockUseParams.mockReturnValue({ articleSlug: 'test-article' });
    const errorMessage = 'Failed to fetch article';
    mockGetArticle.mockRejectedValue(new Error(errorMessage));

    render(<Article />);

    await waitFor(() => {
      expect(screen.getByText(`Error: ${errorMessage}`)).toBeInTheDocument();
    });
  });

  it('should render article content when fetching is successful', async () => {
    mockUseParams.mockReturnValue({ articleSlug: 'test-article' });
    const mockArticleContent = '# Test Article\nThis is the content.';
    mockGetArticle.mockResolvedValue(mockArticleContent);

    render(<Article />);

    await waitFor(() => {
      expect(screen.getByRole('heading', { name: 'Test Article' })).toBeInTheDocument();
      expect(screen.getByText('This is the content.')).toBeInTheDocument();
    });
  });

  it('should call getArticle with the correct slug from URL parameters', async () => {
    const articleSlug = 'another-test-article';
    mockUseParams.mockReturnValue({ articleSlug });
    const mockArticleContent = 'Content for another article.';
    mockGetArticle.mockResolvedValue(mockArticleContent);

    render(<Article />);

    await waitFor(() => {
      expect(mockGetArticle).toHaveBeenCalledWith(articleSlug);
    });
  });
});