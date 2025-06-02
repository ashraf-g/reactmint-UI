import { themes } from '@storybook/theming';
import React from 'react';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'light', title: 'Light' },
        { value: 'dark', title: 'Dark' },
      ],
      showName: true,
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    current: 'light',
    dark: {
      ...themes.dark,
      appBg: '#0f172a',
      appContentBg: '#1e293b',
      brandTitle: 'ReactMint (Dark)'
    },
    light: {
      ...themes.normal,
      brandTitle: 'ReactMint (Light)'
    },
    darkClass: 'dark',
    lightClass: 'light',
    stylePreview: true
  }
};

export const decorators = [
  (Story, context) => {
    const theme = context.globals.theme === 'dark' ? 'dark' : 'light';
    document.documentElement.className = theme;
    return (
      <div className={theme} style={{
        minHeight: '100vh',
        padding: '2rem',
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}>
        <Story />
      </div>
    );
  }
];
