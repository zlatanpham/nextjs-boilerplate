export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-4xl px-6 py-16 sm:py-24">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-foreground mb-3 text-3xl font-medium">
            Next.js Boilerplate
          </h1>
          <p className="text-muted-foreground mx-auto max-w-md text-base">
            A minimal starter template with modern tooling and best practices
          </p>
        </header>

        {/* Features Grid */}
        <section className="mb-16">
          <h2 className="mb-8 text-lg font-medium">What&apos;s included</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Next.js 15</h3>
              <p className="text-muted-foreground text-sm">
                Latest version with App Router and React Server Components
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">TypeScript</h3>
              <p className="text-muted-foreground text-sm">
                Configured with strict mode for type safety
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Tailwind CSS</h3>
              <p className="text-muted-foreground text-sm">
                Utility-first CSS with a custom design system
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">shadcn/ui</h3>
              <p className="text-muted-foreground text-sm">
                Ready to install beautiful, accessible components
              </p>
            </div>
          </div>
        </section>

        {/* Quick Start */}
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-medium">Quick start</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                1. Install dependencies
              </p>
              <pre className="bg-muted overflow-x-auto rounded-md px-4 py-3 text-sm">
                <code>pnpm install</code>
              </pre>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                2. Start the development server
              </p>
              <pre className="bg-muted overflow-x-auto rounded-md px-4 py-3 text-sm">
                <code>pnpm dev</code>
              </pre>
            </div>
            <div className="space-y-2">
              <p className="text-muted-foreground text-sm">
                3. Add your first component
              </p>
              <pre className="bg-muted overflow-x-auto rounded-md px-4 py-3 text-sm">
                <code>pnpm add:ui button</code>
              </pre>
            </div>
          </div>
        </section>

        {/* File Structure */}
        <section className="mb-16">
          <h2 className="mb-6 text-lg font-medium">Project structure</h2>
          <pre className="text-muted-foreground bg-muted overflow-x-auto rounded-md px-4 py-3 text-sm">
            {`src/
├── app/           # App router pages
├── components/    # React components
│   └── ui/       # shadcn/ui components
└── lib/          # Utilities`}
          </pre>
        </section>

        {/* Footer */}
        <footer className="border-t pt-8">
          <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-sm sm:flex-row">
            <p>Built with Next.js, TypeScript, and Tailwind CSS</p>
            <div className="flex gap-4">
              <a
                href="https://nextjs.org/docs"
                className="hover:text-foreground transition-colors"
              >
                Docs
              </a>
              <a
                href="https://ui.shadcn.com"
                className="hover:text-foreground transition-colors"
              >
                Components
              </a>
              <a
                href="https://github.com"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
