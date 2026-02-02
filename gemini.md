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
- **Auth**: Better Auth + Convex (`@convex-dev/better-auth`)
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
- `src/gameData/`: Game constants (classes, skills, items).

## 🔐 Better Auth + Convex Integration

### Architecture Overview

The authentication uses `@convex-dev/better-auth` which provides:
- **Convex Component**: Auto-manages auth tables (users, sessions, accounts, verifications).
- **HTTP Routes**: Auth endpoints served via Convex HTTP router.
- **SSR Support**: Server-side token validation for TanStack Start.

### Backend Files (convex/)

| File | Purpose |
|------|---------|
| `convex.config.ts` | Registers the Better Auth component via `app.use(betterAuth)`. |
| `auth.config.ts` | Exposes `getAuthConfigProvider()` for Convex auth validation. |
| `auth.ts` | Factory `createAuth(ctx)` configures Better Auth with Convex adapter. |
| `http.ts` | Registers auth HTTP routes via `authComponent.registerRoutes(http, createAuth)`. |

### Frontend Files (src/lib/)

| File | Purpose |
|------|---------|
| `auth-client.ts` | Client-side auth client with `convexClient()` and `usernameClient()` plugins. |
| `auth-server.ts` | SSR utilities: `getToken()`, `fetchAuthQuery()`, `fetchAuthMutation()`. |

### Key Imports

```typescript
// Backend (convex/auth.ts)
import { betterAuth } from 'better-auth/minimal'
import { createClient } from '@convex-dev/better-auth'
import { convex } from '@convex-dev/better-auth/plugins'
import { username } from 'better-auth/plugins' // NOT from @convex-dev!

// Frontend (src/lib/auth-client.ts)
import { createAuthClient } from 'better-auth/react'
import { convexClient } from '@convex-dev/better-auth/client/plugins'
import { usernameClient } from 'better-auth/client/plugins' // NOT from @convex-dev!
```

### Environment Variables

**Local (.env.local):**
```
BETTER_AUTH_SECRET=<your-secret>
VITE_CONVEX_URL=https://your-deployment.convex.cloud
VITE_CONVEX_SITE_URL=https://your-deployment.convex.site
```

**Convex Dashboard (npx convex env set):**
```
BETTER_AUTH_SECRET=<your-secret>
VITE_SITE_URL=http://localhost:3000
```

### Router Context Setup

The root route (`__root.tsx`) must:
1. Fetch token via `getToken()` server function.
2. Pass `convexQueryClient` in route context.
3. Wrap app with `<ConvexBetterAuthProvider>`.

```typescript
// src/router.tsx
const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL as string
const convexQueryClient = new ConvexQueryClient(CONVEX_URL)
```

### Route Protection

Use `beforeLoad` guards for route protection:

```typescript
// Protected route (requires auth)
beforeLoad: ({ context }) => {
  if (!context.isAuthenticated) {
    throw redirect({ to: '/' })
  }
}

// Auth route (redirect if already logged in)
beforeLoad: ({ context }) => {
  if (context.isAuthenticated) {
    throw redirect({ to: '/characters' })
  }
}
```

### Schema Notes

- **DO NOT** manually define auth tables in `convex/schema.ts`.
- The Better Auth component auto-manages: `users`, `sessions`, `accounts`, `verifications`.
- Only define YOUR application tables in the schema.

### Vite Configuration

Add to `vite.config.ts`:
```typescript
ssr: {
  noExternal: ['@convex-dev/better-auth'],
}
```
