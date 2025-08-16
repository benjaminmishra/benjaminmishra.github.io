import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('./components/Banner', () => () => <div data-testid="banner-mock" />);
jest.mock('./services/article.service', () => ({
  getArticles: jest.fn(),
  getArticle: jest.fn(),
}));

test('renders app without crashing', () => {
  render(<App />);
  expect(screen.getByTestId('banner-mock')).toBeInTheDocument();
});
