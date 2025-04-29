import React from 'react';
import { render, screen } from '@testing-library/react';
import Welcome from './Welcome';

test('Welcome bileşeni doğru mesajı gösterir', () => {
  render(<Welcome name="Eren" />);
  // "Hoş geldin, Eren!" yazısını bul
  expect(screen.getByText(/Hoş geldin, Eren!/i)).toBeInTheDocument();
});
