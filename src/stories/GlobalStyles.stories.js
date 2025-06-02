import React from 'react';
import '../styles/index.css';
import '../styles/base/variables.css';

export default {
  title: 'Foundations/Global Styles',
  parameters: {
    layout: 'centered',
  },
};

const ThemeIndicator = () => (
  <div style={{
    position: 'fixed',
    top: '1rem',
    right: '1rem',
    padding: '0.5rem 1rem',
    borderRadius: '999px',
    background: 'var(--color-primary)',
    color: 'white',
    fontSize: '0.875rem',
    fontWeight: '600'
  }}>
    Current Theme: {document.documentElement.classList.contains('dark') ? 'Dark' : 'Light'}
  </div>
);

const Template = () => (
  <div style={{
    background: 'var(--surface-primary)',
    padding: '2rem',
    borderRadius: '0.5rem',
    border: '1px solid var(--border-primary)',
    maxWidth: '800px'
  }}>
    <ThemeIndicator />
    <h1 style={{ color: 'var(--text-primary)' }}>Global Styles Test</h1>
    <p style={{ color: 'var(--text-secondary)' }}>This story demonstrates all global styles and design tokens.</p>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1rem',
      marginTop: '2rem'
    }}>
      <div style={{
        background: 'var(--color-primary)',
        color: 'white',
        padding: '1rem',
        borderRadius: '0.25rem'
      }}>Primary Color</div>

      <div style={{
        background: 'var(--color-secondary)',
        color: 'white',
        padding: '1rem',
        borderRadius: '0.25rem'
      }}>Secondary Color</div>

      <div style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)',
        padding: '1rem',
        borderRadius: '0.25rem',
        border: '1px solid var(--border-primary)'
      }}>Background</div>
    </div>
  </div>
);

export const Light = Template.bind({});
Light.parameters = { theme: 'light' };

export const Dark = Template.bind({});
Dark.parameters = { theme: 'dark' };
