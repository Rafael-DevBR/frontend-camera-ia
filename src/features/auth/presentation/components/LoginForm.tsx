// src/features/auth/presentation/components/LoginForm.tsx
"use client";

import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Mail, Lock, Loader2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { mutate: login, isPending, error } = useLogin();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPending) return;
    login({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-500/30 text-red-800 dark:text-red-200 text-xs md:text-sm rounded-lg">
          {error.message || "Falha ao autenticar. Verifique suas credenciais."}
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
      </div>

      <div className="space-y-1.5 md:space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
          Senha
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
            <Lock size={18} />
          </span>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full pl-10 pr-10 py-2.5 md:py-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            title={showPassword ? "Ocultar senha" : "Mostrar senha"}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="w-full flex items-center justify-center py-3 px-4 bg-gradient-to-r from-emerald-600 to-amber-600 hover:from-emerald-500 hover:to-amber-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-emerald-500/20 active:scale-[0.98] transition-all disabled:opacity-50 disabled:pointer-events-none cursor-pointer text-sm"
      >
        {isPending ? (
          <>
            <Loader2 className="animate-spin mr-2" size={18} />
            Entrando...
          </>
        ) : (
          "Entrar no Portal"
        )}
      </button>

      <div className="flex justify-between text-sm">
        <Link
          href="/esqueciasenha"
          className="text-emerald-600 hover:text-emerald-500"
        >
          Esqueci minha senha
        </Link>

        <Link href="/cadastro" className="text-amber-600 hover:text-amber-500">
          Criar conta
        </Link>
      </div>
    </form>
  );
}
