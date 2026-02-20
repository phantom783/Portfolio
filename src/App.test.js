import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero subtitle', () => {
  render(<App />);
  const subtitle = screen.getByRole('heading', { name: /full stack mern developer/i });
  expect(subtitle).toBeInTheDocument();
});
