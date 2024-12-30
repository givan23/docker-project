import React from 'react';
import { render, screen } from '@testing-library/react';

import App from './App';

test('Should renders Learn CI-CD correctly', () => {
  render(<App />);
  const textElement = screen.getByText(/Learn CI-CD/i);
  expect(textElement).toBeTruthy();
});
