import React from 'react';
import '../../styles/index.css';

export default {
  title: 'Foundations/Layout Utilities',
};

export const FlexAndGrid = () => (
  <div style={{ padding: '2rem' }}>
    <div className="flex gap-sm bg-muted p-sm rounded-sm">
      <div className="bg-primary p-sm text-white">Flex Item 1</div>
      <div className="bg-primary p-sm text-white">Flex Item 2</div>
    </div>

    <div className="grid grid-cols-2 gap-sm mt-md">
      <div className="bg-secondary p-sm text-white">Grid 1</div>
      <div className="bg-secondary p-sm text-white">Grid 2</div>
    </div>
  </div>
);
