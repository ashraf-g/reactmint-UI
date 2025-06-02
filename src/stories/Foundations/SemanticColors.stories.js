import React from 'react';
import '../../styles/index.css';

export default {
  title: 'Foundations/Colors/Semantic',
};

const semantic = [
  'color-primary',
  'color-primary-hover',
  'color-secondary',
  'color-success',
  'color-warning',
  'color-info',
  'color-error',
  'color-accent',
  'color-accent-hover',
];

export const Semantic = () => (
  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '1rem' }}>
    {semantic.map((token) => (
      <div key={token} style={{
        background: `var(--${token})`,
        padding: '1rem',
        borderRadius: 'var(--radius-sm)',
        color: 'white',
        fontWeight: 600,
        fontSize: '0.85rem',
        textShadow: '0 1px 2px rgba(0,0,0,0.2)'
      }}>
        --{token}
      </div>
    ))}
  </div>
);
