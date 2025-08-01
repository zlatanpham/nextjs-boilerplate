# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a minimal Next.js 15 boilerplate for quickly starting new projects. It provides only the essential setup with no example pages or complex components - just a clean foundation.

## Commands

### Development

- `pnpm dev` - Run development server with Turbopack at http://localhost:3000
- `pnpm build` - Build production application
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm test` - Run tests with Vitest
- `pnpm add:ui` - Add new shadcn/ui components

### Testing

- `pnpm test` - Run all tests
- `pnpm test src/app/page.test.tsx` - Run specific test file

## Architecture

### Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS v4 with CSS variables
- **UI Components**: shadcn/ui (New York style) - ready to add components
- **Testing**: Vitest with React Testing Library
- **Package Manager**: pnpm

### Project Structure

- `/src/app` - Next.js App Router pages
  - `page.tsx` - Simple home page
  - `layout.tsx` - Root layout
  - `globals.css` - Global styles and Tailwind directives
- `/src/components` - React components
  - `ui/` - shadcn/ui components (added as needed)
- `/src/lib` - Utility functions
  - `utils.ts` - cn() helper for className merging

### Key Patterns

- **Minimal Setup**: No example pages or demo components
- **Component Library**: shadcn/ui configured but no components pre-installed
- **Type Safety**: Strict TypeScript configuration
- **Testing**: Vitest configured with jsdom environment
- **Path Aliases**: `@/*` maps to `./src/*`

### Development Guidelines

- Keep the boilerplate minimal - users will add what they need
- Use shadcn/ui components via `pnpm add:ui [component]`
- Follow Next.js App Router conventions
- Write tests for new features
