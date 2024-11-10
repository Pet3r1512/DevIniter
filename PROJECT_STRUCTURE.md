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
    ├── build/                      # Compiled files
    ├── src/                        # Source files
    │   ├── components/             # React components
    │   │   ├── Documents/          # Components for Nextra documents
    │   │   ├── Home/               # Components for Homepage
    │   │   ├── Layouts/            # Reusable layout components
    │   │   └── ui/                 # Third-party components
    │   │       ├── aceternity/     # Components from Aceternity
    │   │       └── *.tsx           # Components from Shadcn
    │   ├── hooks/                  # Custom hooks
    │   ├── stores/                 # Zustand stores
    │   ├── pages/                  # Page components
    │   ├── utils/                  # Utility functions
    │   └── styles/                 # CSS files
    ├── public/                     # Static files
    │   ├── animations/             # Lotties components
    │   ├── favicon/                # Favicons
    │   └── images/                 # Image assets
    ├── LICENSE
    └── README.md

## Key Directories

### src/

Contains the main source code of the application.

#### components/

React components organized by function:

- `Documents/`: Components specific to Nextra documentation
- `Home/`: Components used in the homepage (pages/index.tsx)
- `Layouts/`: Reusable layout components
- `ui/`: Third-party component implementations
  - `aceternity/`: Components from Aceternity UI library
  - `*.tsx`: Components from Shadcn UI library

#### hooks/

Custom React hooks for shared functionality.

#### stores/

Zustand store definitions for state management.

#### pages/

Page-level components and routing.

#### utils/

Helper functions and utility code.

#### styles/

CSS and styling files.

### public/

Static assets served directly by the web server.

- `animations/`: Lottie animation files
- `favicon/`: Website favicon files
- `images/`: Static image assets

## File Naming Conventions

- Component files: PascalCase (e.g., `Button.tsx`, `Header.tsx`)
- Utility files: camelCase (e.g., `formatDate.ts`, `helpers.ts`)
- Style files: Same name as component with `.css` extension
- Test files: `*.test.js` or `*.spec.js` should be placed alongside their corresponding components for better maintainability

## Additional Notes

- All components should have their own directory with an index file
- Keep related files close to where they're used
- Follow consistent naming patterns within directories
