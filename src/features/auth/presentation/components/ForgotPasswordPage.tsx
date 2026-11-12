// src/features/auth/presentation/components/ForgotPasswordPage.tsx
import { ForgotPasswordForm } from "./ForgotPasswordForm";

export function ForgotPasswordPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-200">
      <div className="absolute top-0 -left-40 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 -right-40 w-96 h-96 bg-amber-500/10 dark:bg-amber-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="w-full max-w-md p-6 md:p-8 bg-white/80 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 rounded-2xl shadow-xl dark:shadow-2xl backdrop-blur-md relative z-10">
        <div className="mb-6 md:mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-emerald-600 to-green-500 dark:from-emerald-400 dark:to-green-400 bg-clip-text text-transparent">
            Recuperar senha
          </h2>
          <p className="mt-2 text-xs md:text-sm text-slate-600 dark:text-slate-400">
            Digite seu email cadastrado para receber o link de recuperação.
          </p>
        </div>

        <ForgotPasswordForm />
      </div>
    </div>
  );
}
