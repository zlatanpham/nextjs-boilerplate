# AGENT.md

This file provides guidance to coding agents (Claude Code, etc.) when working with code in this repository.

## Project Overview

A minimal Next.js 16 boilerplate for quickly starting new projects. Provides essential setup with a small demo page and a starter set of shadcn/ui components — a clean foundation to build on.

## Commands

### Development

- `pnpm dev` - Run development server with Turbopack at http://localhost:3000
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format files with Prettier
- `pnpm format:check` - Check formatting without writing
- `pnpm test` - Run tests with Vitest
- `pnpm add:ui` - Add new shadcn/ui components

### Testing

- `pnpm test` - Run all tests (watch mode)
- `pnpm test --run` - Run tests once (CI mode)
- `pnpm test src/app/page.test.tsx` - Run a specific test file

## Architecture

### Tech Stack

- **Framework**: Next.js 16 with App Router (Turbopack)
- **Language**: TypeScript 6 (strict mode)
- **Styling**: Tailwind CSS v4 with CSS variables, `tw-animate-css`
- **UI Components**: shadcn/ui (New York style) on the unified `radix-ui` package
- **Forms**: `react-hook-form` + `zod` (via `@hookform/resolvers`)
- **Icons**: `lucide-react`
- **Testing**: Vitest 4 with React Testing Library and jsdom
- **Tooling**: ESLint 9, Prettier 3 (+ `prettier-plugin-tailwindcss`), Husky + lint-staged
- **Package Manager**: pnpm

### Project Structure

- `/src/app` - Next.js App Router pages
  - `page.tsx` - Home page (demo content)
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles and Tailwind directives
- `/src/components` - React components
  - `copy-button.tsx` - Example component with tests
  - `ui/` - shadcn/ui components (button, card, dialog, form, input, label, textarea)
- `/src/lib` - Utility functions
  - `utils.ts` - `cn()` helper for className merging
- `/src/test-setup.ts` - Vitest setup (jest-dom matchers)

### Key Patterns

- **Minimal Setup**: Small surface area — add only what you need
- **Component Library**: shadcn/ui pre-wired with a starter set; add more via `pnpm add:ui [component]`
- **Type Safety**: Strict TypeScript configuration
- **Testing**: Vitest with jsdom environment and React Testing Library
- **Path Aliases**: `@/*` maps to `./src/*`
- **Pre-commit**: Husky + lint-staged run ESLint and Prettier on staged files

### Development Guidelines

- Keep the boilerplate minimal — users will add what they need
- Use shadcn/ui components via `pnpm add:ui [component]`
- Follow Next.js App Router conventions
- Write tests for new features
- ESLint is pinned to v9; `eslint-config-next` is not yet compatible with ESLint 10
