import React from 'react';
import './Search.css';

const Search = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  return (
    <div
      className={`search ${variant !== 'default' ? `search--${variant}` : ''} ${className}`.trim()}
      data-testid="search"
      {...props}
    >
      {children}
    </div>
  );
};

export default Search;