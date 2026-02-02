import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { Plus, Trash2, Play, LogOut } from 'lucide-react'
import { authClient } from '../lib/auth-client'

import { GameButton } from '../components/GameButton'

export const Route = createFileRoute('/characters')({
  component: Characters,
})

function Characters() {
  const { t } = useTranslation()

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          window.location.href = '/'
        }
      }
    })
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4">
      {/* Main Container */}
      <div className="w-full max-w-lg border border-white p-8 flex flex-col gap-8">
        <h1 className="text-4xl font-bold text-center uppercase tracking-widest">
          {t('characters.title')}
        </h1>

        {/* Characters List / Empty State Area */}
        <div className="border border-white min-h-[400px] flex items-center justify-center p-8 text-center">
          <p className="text-lg opacity-60">
            {t('characters.empty_state')}
          </p>
        </div>

        {/* Primary Action Buttons */}
        <div className="flex gap-4">
          <GameButton className="flex-1">
            <Plus size={16} />
            {t('characters.create')}
          </GameButton>
          <GameButton className="flex-1">
            <Trash2 size={16} />
            {t('characters.delete')}
          </GameButton>
          <GameButton className="flex-[1.5]">
            <Play size={16} />
            {t('characters.play')}
          </GameButton>
        </div>
      </div>

      {/* Logout / Menu Button Bottom Right */}
      <div className="fixed bottom-8 right-8">
        <GameButton 
          onClick={handleLogout}
          className="text-xs py-1.5 px-3"
        >
          <LogOut size={14} />
          {t('characters.logout')}
        </GameButton>
      </div>
    </div>
  )
}
