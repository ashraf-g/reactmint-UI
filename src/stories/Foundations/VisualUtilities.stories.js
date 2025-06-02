import React from 'react';
import '../../styles/index.css';

export default {
  title: 'Foundations/Visual Utilities',
};

export const BordersShadows = () => (
  <div style={{ padding: '2rem' }}>
    <div className="p-md border rounded-sm mb-md">Bordered Box</div>
    <div className="p-md rounded-md shadow-sm mb-md">Shadow Small</div>
    <div className="p-md rounded-lg shadow-md">Shadow Medium</div>
  </div>
);
