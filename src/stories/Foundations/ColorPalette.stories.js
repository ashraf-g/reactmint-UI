import React from 'react';
import '../../styles/index.css';

export default {
  title: 'Foundations/Colors/Palette',
};

const colors = [
  'color-white',
  'color-black',
  'color-gray-50',
  'color-gray-100',
  'color-gray-200',
  'color-gray-300',
  'color-gray-400',
  'color-gray-500',
  'color-gray-600',
  'color-gray-700',
  'color-gray-800',
  'color-gray-900',
];

export const Palette = () => (
  <div className="grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))', gap: '1rem' }}>
    {colors.map((token) => (
      <div key={token} style={{
        background: `var(--${token})`,
        height: '4rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: token.includes('gray-900') ? 'white' : 'black',
        borderRadius: 'var(--radius-sm)',
        fontSize: '0.75rem',
      }}>
        --{token}
      </div>
    ))}
  </div>
);
