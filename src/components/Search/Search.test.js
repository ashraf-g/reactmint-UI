import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Search from './Search';

describe('Search', () => {
  it('renders with default props', () => {
    render(<Search>Test</Search>);
    expect(screen.getByTestId('search')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<Search variant="primary">Test</Search>);
    expect(screen.getByTestId('search')).toHaveClass('search--primary');
  });
});