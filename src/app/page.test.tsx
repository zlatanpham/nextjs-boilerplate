import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home', () => {
  it('renders the home page', () => {
    render(<Home />);

    expect(screen.getByText('Next.js Boilerplate')).toBeInTheDocument();
    expect(screen.getByText(/A minimal starter template/i)).toBeInTheDocument();
    expect(screen.getByText(/What's included/i)).toBeInTheDocument();
    expect(screen.getByText(/Quick start/i)).toBeInTheDocument();
  });
});
