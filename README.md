# 🚀 ReactMint UI

A modern, lightweight, and customizable React component library with clean CSS styles, built for creating scalable and beautiful UIs quickly.

---

## ✨ Features

- ⚡ **Utility-First CSS** – Inspired by Tailwind, with simple, atomic classnames
- 🎨 **Customizable Tokens** – Define your own color palette, spacing, typography
- 💡 **Component Generator** – Create new components with tests, styles & stories in seconds
- 📦 **Reusable React Components** – Prebuilt with variant support
- 📖 **Storybook Integrated** – Preview and test components visually
- 🧪 **100% Test Coverage** – Powered by Jest & React Testing Library
- 🛠 **Easily Themed** – Based on CSS variables for dark/light modes

---

## 📁 Folder Structure

```
ReactMint-UI
├── src/
│   ├── components/           # All reusable components
│   ├── styles/               # Base + utility CSS
│   │   ├── base/             # Reset, variables, typography
│   │   └── utilities/        # Margin, padding, flex, etc.
│   └── index.js              # Main entry for exports
├── scripts/
│   └── createComponent.js    # CLI tool to scaffold components
└── .storybook/               # Storybook config

🚀 Getting Started
1. 📦 Install Dependencies
npm install

2. 📚 Start Storybook
npm run storybook
Visit: http://localhost:6006

3. ✅ Run Tests
npm run test
Generate snapshots or HTML reports:
npm run test:coverage

⚙️ Usage
Create a New Component
npm run create:component MyComponent
Automatically creates:

MyComponent.js

MyComponent.css

MyComponent.test.js

MyComponent.stories.js

index.js

🧱 CSS Utilities (WIP)
<div class="m-2 p-2 text-center bg-primary text-white rounded-sm">
  Utility Classes Example
</div>
📌 Example Component

import { Button } from 'reactmint-ui';

<Button variant="primary">Click Me</Button>

🧪 Snapshot Testing
Snapshots are committed to track changes visually:
npm test -- -u

🤝 Contributing
We welcome all contributions! Open an issue or submit a PR.

📝 License
MIT © Gulam Ashraf

```
