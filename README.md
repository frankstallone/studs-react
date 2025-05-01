# Simpson Strong-Tie STUDS React Component Library

This repository contains a test React component library for Simpson Strong-Tie's STUDS design system. It provides a collection of reusable, accessible, and type-safe components built with React and TypeScript.

## Technologies

- **React 19**: Latest experimental version of React with improved features, server components, and concurrent rendering capabilities
- **TypeScript 5.7**: For robust type safety, improved developer experience, and latest language features
- **Vite 6.2**: Modern build tool offering lightning-fast HMR and optimized production builds
- **Storybook 8.6**: Latest version for component documentation, development, and testing in isolation
- **Vitest 3.0**: Fast, native ESM-based testing framework with first-class TypeScript support
- **Testing Library 16.2**: Complete testing utilities emphasizing user-centric testing approaches
- **Radix UI 1.1**: Unstyled, accessible component primitives for building robust design systems
- **ESLint 9.21**: Code linting with strict TypeScript rules and React-specific configurations
- **Playwright 1.51**: For reliable end-to-end testing across multiple browsers
- **CSS Modules**: For scoped, modular styling with TypeScript integration

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
# Start the development server
npm run dev

# Run Storybook for component development
npm run storybook

# Run tests
npm run test
```

### Building

```bash
# Build the library
npm run build

# Build Storybook documentation
npm run build-storybook
```

## Project Structure

- `/lib`: Source code for components
- `/dist`: Built library output (generated)
- `/src`: Vite app for demoing components

### Component Structure Example

Each component follows a consistent file structure. Here's an example using the Button component:

```
/lib/components/Button/
├── Button.module.css        # Component-specific styles
├── Button.module.css.d.ts   # TypeScript definitions for CSS modules
├── Button.stories.tsx       # Storybook documentation and examples
├── Button.test.tsx          # Component tests
└── index.tsx               # Main component implementation
```

## Development Guidelines

- All components should be written in TypeScript
- Components should be accessible and follow WCAG guidelines
- Each component should have:
  - Unit tests using Vitest, Testing Library, and Playwright
  - Storybook documentation
  - Type definitions
  - Proper accessibility implementations

## Building Components

Components are built using Vite and TypeScript, with CSS modules for styling. The build process:

1. Compiles TypeScript code
2. Bundles components with Vite
3. Generates type definitions
4. Injects CSS appropriately

## Testing

This project uses Vitest with React Testing Library for testing. To run the tests:

1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers (required for browser-based testing):

```bash
npx playwright install chromium
```

3. Run tests:

```bash
npm run test
```

### Test Setup

The test environment is configured with:

- Jest DOM matchers for DOM testing
- React Testing Library for component testing
- Automatic cleanup after each test
- TypeScript support
- Playwright for browser-based testing

If you encounter any issues with the test setup, make sure:

1. All dependencies are properly installed
2. Playwright browsers are installed using the command above
3. TypeScript types are properly configured

## Contributing

Please ensure all new components:

1. Follow the established coding patterns
2. Include proper documentation
3. Have comprehensive tests
4. Are accessible
5. Pass all linting rules
