# Simpson Strong-Tie STUDS React Component Library

This repository contains the React component library for Simpson Strong-Tie's STUDS design system. It provides a collection of reusable, accessible, and type-safe components built with React and TypeScript.

## Technologies

- **React 19**: Latest version of React with improved features and performance
- **TypeScript**: For type safety and better developer experience
- **Vite**: Modern build tool for faster development and optimized production builds
- **Storybook 8**: For component documentation and development
- **Vitest**: Testing framework for unit and integration tests
- **Testing Library**: For writing maintainable component tests
- **Radix UI**: For accessible primitive components
- **ESLint**: Code linting with strict TypeScript rules

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

## Available Scripts

- `dev`: Start Vite development server
- `build`: Build the library for production (TypeScript compilation + Vite build)
- `lint`: Run ESLint checks
- `preview`: Preview the production build locally
- `test`: Run Vitest tests
- `storybook`: Start Storybook development server
- `build-storybook`: Build static Storybook site
- `prepublishOnly`: Run build before publishing

## Project Structure

- `/src`: Source code for components
- `/lib`: Library-specific utilities and helpers
- `/test`: Test utilities and setup
- `/dist`: Built library output (generated)
- `/.storybook`: Storybook configuration
- `/public`: Static assets

## Development Guidelines

- All components should be written in TypeScript
- Components should be accessible and follow WCAG guidelines
- Each component should have:
  - Unit tests using Vitest and Testing Library
  - Storybook documentation
  - Type definitions
  - Proper accessibility implementation

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

For watch mode:

```bash
npm run test -- --watch
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
4. The test setup file at `test/setup.ts` is present and properly configured

## Contributing

Please ensure all new components:

1. Follow the established coding patterns
2. Include proper documentation
3. Have comprehensive tests
4. Are accessible
5. Pass all linting rules
