

# Plantilla base de Next.js

Una plantilla de inicio minimalista y limpia construida con Next.js 16, TypeScript y Tailwind CSS.

## Características

- ⚡ **Next.js 16** con App Router y Turbopack
- 📝 **TypeScript 6** (modo estricto) para seguridad de tipos
- 🎨 **Tailwind CSS v4** con variables CSS y `tw-animate-css`
- 🧩 **shadcn/ui** (New York) en el paquete unificado `radix-ui`
- 📋 **React Hook Form** + **Zod** para manejo y validación de formularios
- 🎭 Iconos **lucide-react**
- 🧪 **Vitest** + React Testing Library para pruebas
- 📱 Diseño **responsive**
- 🎯 **ESLint** configurado
- 💅 **Prettier** con `prettier-plugin-tailwindcss` para el formato de código
- 🪝 **Husky** + **lint-staged** para ganchos pre-commit

## Inicio rápido

### Requisitos previos

- Node.js 20+
- pnpm (recomendado) o npm

### Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/zlatanpham/nextjs-boilerplate.git
cd nextjs-boilerplate
```

2. Instala las dependencias:

```bash
pnpm install
```

3. Ejecuta el servidor de desarrollo:

```bash
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## Scripts disponibles

- `pnpm dev` - Iniciar servidor de desarrollo
- `pnpm build` - Compilar para producción
- `pnpm start` - Iniciar servidor de producción
- `pnpm lint` - Ejecutar ESLint
- `pnpm format` - Formatear código con Prettier
- `pnpm format:check` - Verificar formato de código
- `pnpm test` - Ejecutar pruebas
- `pnpm add:ui` - Agregar componentes shadcn/ui

## Estructura del proyecto

```
src/
├── app/                  # Next.js App Router
│   ├── globals.css       # Global styles and Tailwind directives
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── copy-button.tsx   # Example component
│   └── ui/               # shadcn/ui components (button, card, dialog, form, …)
├── lib/                  # Utility functions
│   └── utils.ts          # cn() helper for className merging
└── test-setup.ts         # Vitest setup (jest-dom matchers)
```

## Agregar componentes de UI

Este proyecto está configurado para usar [shadcn/ui](https://ui.shadcn.com/). Para agregar un nuevo componente:

```bash
pnpm add:ui button
```

## Despliegue

Despliega fácilmente con [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/nextjs-boilerplate)

## Licencia

MIT
