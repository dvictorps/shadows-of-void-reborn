import { createFileRoute } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useForm } from '@tanstack/react-form'

import { z } from 'zod'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const { t } = useTranslation()

  const form = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
   
    onSubmit: async ({ value }) => {
      // In a real scenario, we'd call better-auth's signIn
      console.log('Login attempt:', value)
    },
  })

  return (
    <div className="flex min-h-screen bg-background text-foreground overflow-hidden">
      {/* Left Column: Pulsing Title */}
      <div className="hidden lg:flex flex-1 items-center justify-center relative border-r border-white/5">
        {/* Pulsing Aura Backdrop */}
        <div className="absolute inset-0 flex items-center justify-center -z-10 overflow-hidden pointer-events-none">
          <div className="w-[40vw] h-[40vw] rounded-full bg-void-purple animate-void-pulse blur-[60px]" />
        </div>
        
        <h1 className="text-8xl font-black tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
          {t('login.title')}
        </h1>
      </div>

      {/* Right Column: Login Form */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 md:p-12 lg:p-24 bg-background z-10">
        <div className="w-full max-w-md space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">
              {t('login.welcome')}
            </h2>
            <p className="text-muted-foreground">
              {t('login.back_to_reality')}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              e.stopPropagation()
              form.handleSubmit()
            }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <form.Field
                name="email"
                validators={{
                  onChange: z.string().email(),
                }}
              >
                {(field) => (
                  <div className="space-y-2">
                    <label
                      htmlFor={field.name}
                      className="text-sm font-medium leading-none"
                    >
                      {t('login.email')}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="name@example.com"
                    />
                    {field.state.meta.errors ? (
                      <em className="text-xs text-destructive">
                        {field.state.meta.errors.join(', ')}
                      </em>
                    ) : null}
                  </div>
                )}
              </form.Field>

              <form.Field
                name="password"
                validators={{
                  onChange: z.string().min(6),
                }}
              >
                {(field) => (
                  <div className="space-y-2">
                    <label
                      htmlFor={field.name}
                      className="text-sm font-medium leading-none"
                    >
                      {t('login.password')}
                    </label>
                    <input
                      id={field.name}
                      name={field.name}
                      type="password"
                      value={field.state.value}
                      onBlur={field.handleBlur}
                      onChange={(e) => field.handleChange(e.target.value)}
                      className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                    {field.state.meta.errors ? (
                      <em className="text-xs text-destructive">
                        {field.state.meta.errors.join(', ')}
                      </em>
                    ) : null}
                  </div>
                )}
              </form.Field>
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary text-primary-foreground hover:bg-primary/90 h-10 py-2 px-4 w-full"
            >
              {t('login.submit')}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
