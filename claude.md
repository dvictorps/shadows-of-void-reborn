# AI Guidelines - Shadows of Void Reborn

This document provides essential guidelines and context for AI agents working on this project.

## 🛠 Tech Stack

- **Framework**: React 19 + TanStack Start (SSR/Hydration aware)
- **Routing**: TanStack Router
- **State Management**: Zustand (Client-side), Convex (Server-side/Real-time)
- **Data Fetching/Form**: TanStack Query, TanStack Form, TanStack Table
- **Database/Backend**: Convex
- **Styling**: Tailwind CSS 4 (+ `@tailwindcss/vite`)
- **Validation**: Zod
- **Auth**: Better Auth
- **Linting/Formatting**: Biome

## 📜 Coding Rules

- **Zero Comments**: Do not write comments in the code. The code should be self-documenting through clear naming and structure.
- **Early Returns**: Always prefer early returns. Avoid `else` blocks whenever possible to reduce nesting.
- **i18n Mandate**: NEVER hardcode strings. Always add text to `src/locales/` and use the `useTranslation` hook or the `t()` function.
- **Hook Optimization**: 
  - Minimize use of `useEffect`.
  - Use `useCallback` and `useMemo` sparingly. Use `useMemo` ONLY when dealing with heavy computations or large datasets where performance is measurably affected.
- **Styling**: Use Tailwind 4 utility classes. Prefer CSS variables for theme-consistent colors.
- **Convex Guidelines**: Refer to `.cursorrules` for specific Convex schema and validator practices.

## 🧠 Global Skills Available

The following global skills are available in `C:/Users/php/.agents/skills` and should be utilized when relevant:
- `brainstorming`: For architectural or feature design discussions.
- `frontend-design`: For UI/UX principles.
- `web-design-guidelines`: For modern web aesthetics.
- `vercel-react-best-practices`: For React performance and patterns.
- `security-review` & `seo-audit`: For specialized checks.

## 📂 Project Structure

- `src/routes/`: TanStack Router file-based routes.
- `convex/`: Convex backend schema and functions.
- `src/components/`: Reusable UI components (Shadcn/UI).
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Library configurations and shared utilities.
