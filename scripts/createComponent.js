#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

// Validate input
const componentName = process.argv[2];
if (!componentName) {
  console.error("✖ Error: Component name required");
  console.log("ℹ Usage: npm run create:component <ComponentName>");
  process.exit(1);
}

// Configuration - all files go in the component directory
const COMPONENT_DIR = path.join("src/components", componentName);

// Templates
const TEMPLATES = {
  component: (name) => `import React from 'react';
import './${name}.css';

const ${name} = ({ 
  children, 
  className = '', 
  variant = 'default',
  ...props 
}) => {
  return (
    <div
      className={\`${toKebabCase(
        name
      )} \${variant !== 'default' ? \`${toKebabCase(
    name
  )}--\${variant}\` : ''} \${className}\`.trim()}
      data-testid="${toKebabCase(name)}"
      {...props}
    >
      {children}
    </div>
  );
};

export default ${name};`,

  css: (name) => `@import '../../styles/base/variables.css';

.${toKebabCase(name)} {
  /* Base styles */
  box-sizing: border-box;
  display: block;
  font-family: var(--mint-font-sans);
}

/* Variant modifiers */
.${toKebabCase(name)}--primary {
  background-color: var(--mint-primary);
  color: white;
}

.${toKebabCase(name)}--secondary {
  background-color: var(--mint-secondary);
  color: white;
}`,

  test: (name) => `import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ${name} from './${name}';

describe('${name}', () => {
  it('renders with default props', () => {
    render(<${name}>Test</${name}>);
    expect(screen.getByTestId('${toKebabCase(name)}')).toBeInTheDocument();
  });

  it('applies variant classes', () => {
    render(<${name} variant="primary">Test</${name}>);
    expect(screen.getByTestId('${toKebabCase(
      name
    )}')).toHaveClass('${toKebabCase(name)}--primary');
  });
});`,

  story: (name) => `import React from 'react';
import ${name} from './${name}';

export default {
  title: 'Components/${name}',
  component: ${name},
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'primary', 'secondary']
    }
  }
};

const Template = (args) => <${name} {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default ${name}'
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary ${name}',
  variant: 'primary'
};`,

  index: (name) => `export { default } from './${name}';
export * from './${name}';`,
};

// Helper to convert to kebab-case
function toKebabCase(str) {
  return str.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}

// Create component files
function createComponent() {
  // Create component directory
  if (fs.existsSync(COMPONENT_DIR)) {
    console.error(`✖ Component "${componentName}" already exists`);
    process.exit(1);
  }
  fs.mkdirSync(COMPONENT_DIR, { recursive: true });

  // Files to create
  const files = [
    {
      name: `${componentName}.js`,
      content: TEMPLATES.component(componentName),
    },
    { name: `${componentName}.css`, content: TEMPLATES.css(componentName) },
    {
      name: `${componentName}.test.js`,
      content: TEMPLATES.test(componentName),
    },
    {
      name: `${componentName}.stories.js`,
      content: TEMPLATES.story(componentName),
    },
    { name: "index.js", content: TEMPLATES.index(componentName) },
  ];

  // Write files
  files.forEach((file) => {
    const filePath = path.join(COMPONENT_DIR, file.name);
    fs.writeFileSync(filePath, file.content);
    console.log(`✓ Created ${filePath}`);
  });

  updateMainExports();
}

// Update main components index
function updateMainExports() {
  const indexPath = path.join("src/", "index.js");
  const exportLine = `export { default as ${componentName} } from './components/${componentName}';\n`;

  try {
    fs.appendFileSync(indexPath, exportLine);
    console.log(`✓ Updated main exports in ${indexPath}`);
  } catch (err) {
    // Create file if it doesn't exist
    fs.writeFileSync(indexPath, exportLine);
  }
}

// Execute
createComponent();
console.log(`\n🎉 ${componentName} component created successfully!`);
