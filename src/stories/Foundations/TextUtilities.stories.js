import React from 'react';
import '../../styles/index.css';

export default {
  title: 'Foundations/Text Utilities',
};

export const SizesAndAlignment = () => (
  <div style={{ padding: '2rem' }}>
    <p className="text-xs">Text XS</p>
    <p className="text-sm">Text SM</p>
    <p className="text-base">Text Base</p>
    <p className="text-lg">Text LG</p>

    <p className="text-center">Text Center</p>
    <p className="text-right">Text Right</p>
    <p className="text-muted">Muted text color</p>
  </div>
);
