"use client";

import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";
import { useForgotPassword } from "../hooks/useForgotPassword";
import Link from "next/link";

export function ForgotPasswordForm() {
  const [email, setEmail] = useState("");

  const { mutate, isPending, isSuccess, error } = useForgotPassword();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutate(email);
  }

  if (isSuccess) {
    return (
      <div className="p-4 rounded-lg bg-green-100 text-green-800">
        Enviamos um link de recuperação para seu email.
      </div>
    );
  }

return (
  <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
    {error && (
      <div className="p-3 bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-500/30 text-red-800 dark:text-red-200 text-xs md:text-sm rounded-lg">
        {error.message || "Não foi possível enviar o e-mail de recuperação."}
      </div>
    )}

    {isSuccess && (
      <div className="p-3 bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-200 text-xs md:text-sm rounded-lg">
        Se o e-mail informado estiver cadastrado, você receberá um link para redefinir sua senha.
      </div>
    )}

    <div className="space-y-1.5 md:space-y-2">
      <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
        Endereço de E-mail
      </label>

      <div className="relative">
        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
          <Mail size={18} />
        </span>

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          placeholder="nome@exemplo.com"
          className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
        />
      </div>

      <p className="text-xs text-slate-500 dark:text-slate-400">
        Informe o e-mail utilizado no cadastro. Enviaremos um link para redefinir
        sua senha.
      </p>
    </div>

    <button
      type="submit"
      disabled={isPending}
      className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-sm"
    >
      {isPending ? (
        <>
          <Loader2 className="animate-spin mr-2" size={18} />
          Enviando...
        </>
      ) : (
        <>
          <Mail className="mr-2" size={18} />
          Enviar link de recuperação
        </>
      )}
    </button>

    <div className="flex justify-center text-sm">
      <Link
        href="/login"
        className="text-emerald-600 hover:text-emerald-500 transition-colors"
      >
        ← Voltar para o login
      </Link>
    </div>
  </form>
);
}
