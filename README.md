# Next.js Boilerplate

A minimal, clean starter template built with Next.js 15, TypeScript, and Tailwind CSS.

## Features

- ⚡ **Next.js 15** with App Router and Turbopack
- 📝 **TypeScript** for type safety
- 🎨 **Tailwind CSS v4** for styling
- 🧩 **shadcn/ui** ready to use
- 🧪 **Vitest** for testing
- 📱 **Responsive** design
- 🎯 **ESLint** configured
- 💅 **Prettier** for code formatting
- 🪝 **Husky** + **lint-staged** for pre-commit hooks

## Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/zlatanpham/nextjs-boilerplate.git
cd nextjs-boilerplate
```

2. Install dependencies:

```bash
pnpm install
```

3. Run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm format:check` - Check code formatting
- `pnpm test` - Run tests
- `pnpm add:ui` - Add shadcn/ui components

## Project Structure

```
src/
├── app/              # Next.js App Router
│   ├── globals.css   # Global styles
│   ├── layout.tsx    # Root layout
│   └── page.tsx      # Home page
├── components/       # React components
│   └── ui/          # shadcn/ui components
└── lib/             # Utility functions
    └── utils.ts     # Helper functions
```

## Adding UI Components

This project is configured to use [shadcn/ui](https://ui.shadcn.com/). To add a new component:

```bash
pnpm add:ui button
```

## Deployment

Deploy easily with [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs-boilerplate)

## License

MIT
