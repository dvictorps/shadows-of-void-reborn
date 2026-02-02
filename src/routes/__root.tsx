import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRouteWithContext,
  useRouteContext,
} from '@tanstack/react-router'

import Header from '../components/Header'
import { createServerFn } from '@tanstack/react-start'
import { ConvexBetterAuthProvider } from '@convex-dev/better-auth/react'
import type { ConvexQueryClient } from '@convex-dev/react-query'
import type { QueryClient } from '@tanstack/react-query'

import appCss from '../styles.css?url'
import '../lib/i18n'
import { Toaster } from '../components/ui/sonner'
import { authClient } from '../lib/auth-client'
import { getToken } from '../lib/auth-server'

const getAuth = createServerFn({ method: 'GET' }).handler(async () => {
  return await getToken()
})

interface MyRouterContext {
  queryClient: QueryClient
  convexQueryClient: ConvexQueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Shadows of Void',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
    ],
  }),

  beforeLoad: async (ctx) => {
    const token = await getAuth()
    if (token) {
      ctx.context.convexQueryClient.serverHttpClient?.setAuth(token)
    }

    const { pathname } = ctx.location
    const hideHeader = [
      '/',
      '/register',
      '/characters',
    ].includes(pathname)

    return {
      hideHeader,
      isAuthenticated: !!token,
      token,
    }
  },

  component: RootComponent,
})

function RootComponent() {
  const context = useRouteContext({ from: Route.id })

  return (
    <ConvexBetterAuthProvider
      client={context.convexQueryClient.convexClient}
      authClient={authClient}
      initialToken={context.token}
    >
      <RootDocument>
        <Outlet />
      </RootDocument>
    </ConvexBetterAuthProvider>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  const { hideHeader } = useRouteContext({ from: Route.id })

  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-foreground">
        {!hideHeader && <Header />}
        {children}
        <Toaster />

        <Scripts />
      </body>
    </html>
  )
}
