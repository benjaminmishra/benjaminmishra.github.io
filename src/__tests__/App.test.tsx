import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

jest.mock('../components/Banner', () => () => <div data-testid="banner-mock" />);
jest.mock('../services/article.service', () => ({
  getArticles: jest.fn(),
  getArticle: jest.fn(),
}));

test('renders learn react link', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Benjamin/i);
  nameElements.map(x=>expect(x).toBeInTheDocument());
});
