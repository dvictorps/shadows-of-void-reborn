import { createRouter } from '@tanstack/react-router'
import { setupRouterSsrQueryIntegration } from '@tanstack/react-router-ssr-query'
import * as TanstackQuery from './integrations/tanstack-query/root-provider'
import { ConvexQueryClient } from '@convex-dev/react-query'

// Import the generated route tree
import { routeTree } from './routeTree.gen'

const CONVEX_URL = (import.meta as any).env.VITE_CONVEX_URL as string

// Create a new router instance
export const getRouter = () => {
  const rqContext = TanstackQuery.getContext()
  const convexQueryClient = new ConvexQueryClient(CONVEX_URL)

  const router = createRouter({
    routeTree,
    context: {
      ...rqContext,
      convexQueryClient,
    },

    defaultPreload: 'intent',
  })

  setupRouterSsrQueryIntegration({ router, queryClient: rqContext.queryClient })

  return router
}
