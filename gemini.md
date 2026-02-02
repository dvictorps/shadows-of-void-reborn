# AI Guidelines - Shadows of Void Reborn

🚨 **CRITICAL**: Read this file at the start of EVERY task to ensure alignment with project standards.

## 🛠 Tech Stack

- **Framework**: React 19 + TanStack Start (SSR/Hydration aware)
- **Routing**: TanStack Router
- **State Management**: Zustand (Client-side), Convex (Server-side/Real-time)
- **Data Fetching/Form**: TanStack Query, TanStack Form, TanStack Table
- **Database/Backend**: Convex
- **Styling**: Tailwind CSS 4 (+ `@tailwindcss/vite`)
- **Validation**: Zod
- **Auth**: Better Auth (Email/Password)
- **Notifications**: Sonner (Shadcn UI)
- **Utilities**: `@uidotdev/usehooks`
- **Fonts**: `@fontsource` (Pixelify Sans, Orbitron, Inter)
- **Linting/Formatting**: Biome

## 📜 Coding Rules

- **Zero Comments**: Do not write comments in the code. The code should be self-documenting.
- **Early Returns**: Always prefer early returns. Avoid `else` blocks.
- **i18n Mandate**: NEVER hardcode strings. Use `src/locales/` and the `t()` function.
- **Hook Optimization**: 
  - Minimize use of `useEffect`.
  - Use `useCallback` and `useMemo` ONLY for heavy computations.
- **Styling**: Use Tailwind 4 utility classes.
- **Convex Guidelines**: Refer to `.cursorrules` for specific Convex schema and validator practices.

## 🎨 Visual Identity (Void Aesthetic)

- **Theme**: Pure black (`#000000`) backgrounds.
- **Borders**: Minimalist 1px white borders for containers.
- **Typography**: "Pixelify Sans" is the primary font. Use `font-sans` class on inputs/buttons for inheritance.
- **Icons**: Lucide icons, white by default, with `stroke="currentColor"` for hover color inheritance.

## 🧠 Global Skills Mandate

- **Brainstorming**: MUST use the `brainstorming` skill for any architectural discussions.
- **Frontend Development**: Use `frontend-design`, `web-design-guidelines`, `vercel-react-best-practices`.
- **Game Development**: Use `game-development` and `game-design-theory` for mechanics.

## 📂 Project Structure

- `src/routes/`: TanStack Router file-based routes.
- `convex/`: Convex backend schema and functions.
- `src/components/`: Reusable UI components.
- `src/hooks/`: Custom React hooks.
- `src/lib/`: Library configurations (Auth, i18n).
- `src/locales/`: Internationalization JSON files.
