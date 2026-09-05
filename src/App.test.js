import App from './App';
import { render, screen } from '@testing-library/react';
jest.mock('react-markdown', () => () => null);
jest.mock('@vercel/analytics/react', () => ({ Analytics: () => null }), { virtual: true });

test('renders the portfolio homepage', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', { name: /jackson bond/i });
  expect(linkElement).toBeInTheDocument();
});
