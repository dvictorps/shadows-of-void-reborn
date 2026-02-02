import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useTranslation } from 'react-i18next'
import { useForm } from '@tanstack/react-form'
import { z } from 'zod'
import { toast } from 'sonner'
import { authClient } from '../lib/auth-client'

export const Route = createFileRoute('/register')({
  component: Register,
})

function Register() {
  const { t } = useTranslation()
  const navigate = useNavigate()

  const form = useForm({
    defaultValues: {
      username: '',
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: async ({ value }) => {
      await authClient.signUp.email({
        email: value.email,
        password: value.password,
        name: value.name,
        username: value.username,
        callbackURL: '/characters',
      }, {
        onSuccess: () => {
          toast.success(t('register.success_message') || 'Account created successfully!')
          navigate({ to: '/characters' })
        },
        onError: (ctx) => {
          toast.error(ctx.error.message || 'Registration failed')
        }
      })
    },
  })

  return (
    <div className="relative min-h-screen bg-[#05010a] text-white flex items-center justify-center p-4 md:p-8 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-void-purple/20 blur-[100px] animate-void-pulse" />
      </div>

      <div className="relative z-10 w-full max-w-6xl flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
        {/* Title Section */}
        <div className="flex-1 text-center lg:text-left space-y-4 relative">
          <div className="absolute top-1/2 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-[-10%] -translate-y-1/2 w-[120%] h-[150%] bg-void-purple/30 blur-[80px] animate-void-pulse -z-10 pointer-events-none" />
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white mix-blend-screen drop-shadow-[0_0_40px_rgba(168,85,247,0.4)] animate-in fade-in slide-in-from-left-8 duration-1000">
            {t('register.title')}
          </h1>
        </div>

        {/* Glassmorphic Register Card */}
        <div className="w-full max-w-md animate-in fade-in slide-in-from-right-8 duration-1000 delay-300">
          <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="space-y-2 mb-8 text-center lg:text-left">
       
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
                  name="username"
                  validators={{
                    onChange: ({ value }) => {
                      const result = z.string().min(3).max(20).regex(/^[a-zA-Z0-9_]+$/).safeParse(value)
                      return result.success ? undefined : "Username must be 3-20 characters and alphanumeric"
                    },
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-wider text-purple-200/50 ml-1">
                        {t('register.username')}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="flex h-12 w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="voidwalker"
                      />
                      {field.state.meta.errors && (
                        <em className="text-xs text-red-400 ml-1">{field.state.meta.errors.join(', ')}</em>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="name"
                  validators={{
                    onChange: ({ value }) => {
                      const result = z.string().min(2).safeParse(value)
                      return result.success ? undefined : result.error.issues[0].message
                    },
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-wider text-purple-200/50 ml-1">
                        {t('register.name')}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="flex h-12 w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="John Doe"
                      />
                      {field.state.meta.errors && (
                        <em className="text-xs text-red-400 ml-1">{field.state.meta.errors.join(', ')}</em>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value }) => {
                      const result = z.string().email().safeParse(value)
                      return result.success ? undefined : result.error.issues[0].message
                    },
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-wider text-purple-200/50 ml-1">
                        {t('register.email')}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="flex h-12 w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                        placeholder="name@example.com"
                      />
                      {field.state.meta.errors && (
                        <em className="text-xs text-red-400 ml-1">{field.state.meta.errors.join(', ')}</em>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="password"
                  validators={{
                    onChange: ({ value }) => {
                      const result = z.string().min(6).safeParse(value)
                      return result.success ? undefined : result.error.issues[0].message
                    },
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-wider text-purple-200/50 ml-1">
                        {t('register.password')}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="flex h-12 w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all font-sans"
                      />
                      {field.state.meta.errors && (
                        <em className="text-xs text-red-400 ml-1">{field.state.meta.errors.join(', ')}</em>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="confirmPassword"
                  validators={{
                    onChange: ({ value, fieldApi }) => {
                      if (value !== fieldApi.form.getFieldValue('password')) {
                        return "Passwords don't match"
                      }
                      return undefined
                    },
                  }}
                >
                  {(field) => (
                    <div className="space-y-2">
                      <label htmlFor={field.name} className="text-xs font-semibold uppercase tracking-wider text-purple-200/50 ml-1">
                        {t('register.confirm_password')}
                      </label>
                      <input
                        id={field.name}
                        name={field.name}
                        type="password"
                        value={field.state.value}
                        onBlur={field.handleBlur}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="flex h-12 w-full rounded-2xl border border-white/5 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all"
                      />
                      {field.state.meta.errors && (
                        <em className="text-xs text-red-400 ml-1">{field.state.meta.errors.join(', ')}</em>
                      )}
                    </div>
                  )}
                </form.Field>
              </div>

              <button
                type="submit"
                className="relative group w-full h-12 flex items-center justify-center rounded-2xl bg-white text-black font-bold text-sm transition-all hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="relative z-10 group-hover:text-white transition-colors">
                  {t('register.submit')}
                </span>
              </button>

              <div className="text-center mt-6">
                <p className="text-sm text-purple-200/40">
                  {t('register.have_account')}{' '}
                  <Link
                    to="/"
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    {t('register.login_here')}
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
