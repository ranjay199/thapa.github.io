import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders TechReviews app', () => {
  const { getAllByText } = render(<App />);
  const titleElements = getAllByText(/TechReviews/i);
  expect(titleElements.length).toBeGreaterThan(0);
});
