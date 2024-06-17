import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Benjamin/i);
  nameElements.map(x=>expect(x).toBeInTheDocument());
});
