# Project Structure

## Overview

This structure reflects our current project organization with:

- Clear separation of components by function
- Third-party UI components segregation
- Static assets organization
- State management with Zustand
- Custom hooks implementation

Let me know if you'd like any adjustments to this documentation!

## Directory Structure

    .
    ├── public/                     # Static assets served directly by the web server.
    │   ├── animations/             # Lotties components
    │   ├── favicon/                # Favicons
    │   └── images/                 # Image assets
    ├── src/                        # Contains the main source code of the application.
    │   ├── components/             # React components
    │   │   ├── Documents/          # Components for Nextra pages
    │   │   ├── Home/               # Components for Homepage
    │   │   ├── Layouts/            # Reusable layout components
    │   │   └── ui/                 # Third-party components
    │   │       ├── aceternity/     # Components from Aceternity
    │   │       └── *.tsx           # Components from Shadcn
    │   ├── hooks/                  # Custom React hooks for shared functionality.
    │   ├── stores/                 # Zustand store definitions for state management.
    │   ├── pages/                  # Page-level components and routing.
    │   ├── utils/                  # Helper functions and utility code.
    │   └── styles/                 # CSS and styling files.
    ├── LICENSE
    ├── CONTRIBUTING
    ├── PROJECT_STRUCTURE
    ├── .gitignore                  # GIT ignore patterns for dependencies, builds, and env files
    ├── components.json             # Config for Shadcn
    ├── package.json                # Project config, dependencies managment and scripts
    ├── tailwind.config.ts          # Config for Tailwind
    ├── postcss.config.mjs          # Config for PostCSS
    ├── next.config.mts             # Config for Nextjs
    ├── setupTests.ts               # Additional config for testing
    ├── vitest.config.ts            # Config for Vitest
    ├── tsconfig.json               # Config for Typescript
    ├── theme.config.tsx            # Config for customized Nextra
    └── README.md

## Key Directories

### components/

React components organized by function:

- `Documents/`: Components specific to Nextra documentation
- `Home/`: Components used in the homepage (pages/index.tsx)
- `Layouts/`: Reusable layout components
- `ui/`: Third-party component implementations
  - `aceternity/`: Components from Aceternity UI library
  - `*.tsx`: Components from Shadcn UI library

## File Naming Conventions

- Component files: PascalCase (e.g., `Button.tsx`, `Header.tsx`)
- Utility files: camelCase (e.g., `formatDate.ts`, `helpers.ts`)
- Style files: Same name as component with `.css` extension
- Test files: `*.test.{ts, tsx}` or `*.spec.{ts, tsx}` should be placed alongside their corresponding components for better maintainability

## Additional Notes

- All components should have their own directory with an index file
- Keep related files close to where they're used
- Follow consistent naming patterns within directories
