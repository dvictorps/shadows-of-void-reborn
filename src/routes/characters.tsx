import { createFileRoute, redirect } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { authClient } from '../lib/auth-client'

export const Route = createFileRoute('/characters')({
  beforeLoad: async () => {
    const session = await authClient.getSession()
    if (!session.data) {
      throw redirect({
        to: '/',
      })
    }
  },
  component: Characters,
})

function Characters() {
  const { t } = useTranslation()

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          // Redirect to home is usually handled by navigation or better-auth defaults, 
          // but for now we'll just let the user click and use TanStack Router link if needed.
          window.location.href = '/'
        }
      }
    })
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-lg border border-white p-8 flex flex-col gap-8">
        <h1 className="text-4xl font-black text-center uppercase tracking-widest">
          {t('characters.title')}
        </h1>

        {/* Characters List / Empty State Area */}
        <div className="border border-white min-h-[400px] flex items-center justify-center p-8 text-center">
          <p className="text-lg opacity-60 font-mono">
            {t('characters.empty_state')}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex gap-4">
          <button className="flex-1 border border-white py-2 px-4 hover:bg-white hover:text-black transition-colors font-bold flex items-center justify-center gap-2 group uppercase text-sm">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">+</span>
            {t('characters.create')}
          </button>
          <button className="flex-1 border border-white py-2 px-4 hover:bg-white hover:text-black transition-colors font-bold flex items-center justify-center gap-2 group uppercase text-sm">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">×</span>
            {t('characters.delete')}
          </button>
          <button className="flex-[1.5] border border-white py-2 px-4 hover:bg-white hover:text-black transition-colors font-bold flex items-center justify-center gap-2 group uppercase text-sm">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">▶</span>
            {t('characters.play')}
          </button>
        </div>
      </div>

      {/* Logout / Menu Button Bottom Right */}
      <div className="fixed bottom-8 right-8">
        <button 
          onClick={handleLogout}
          className="border border-white py-2 px-4 hover:bg-white hover:text-black transition-colors font-bold uppercase text-xs flex items-center gap-2 group"
        >
          <span className="opacity-0 group-hover:opacity-100 transition-opacity">←</span>
          {t('characters.logout')}
        </button>
      </div>
    </div>
  )
}
