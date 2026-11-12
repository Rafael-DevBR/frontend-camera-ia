"use client";

import React, { useState } from "react";
import { useRegister } from "../hooks/useRegister";
import { User, Mail, Lock, Loader2, UserCog, Building2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [papel, setPapel] = useState<"USUARIO">(
    "USUARIO",
  );
  const [setor, setSetor] = useState<
    "RECEPCAO" | "TI" | "RH" | "ADMINISTRATIVO" | "PRODUCAO"
  >("TI");

  const { mutate: register, isPending, error } = useRegister();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isPending) return;
    register({ name, email, password, confirmPassword, papel, setor });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
      {error && (
        <div className="p-3 bg-red-100 dark:bg-red-950/50 border border-red-300 dark:border-red-500/30 text-red-800 dark:text-red-200 text-xs md:text-sm rounded-lg">
          {error.message || "Falha ao criar conta. Verifique os dados informados."}
        </div>
      )}

      <div className="space-y-1.5 md:space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
          Nome completo
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
            <User size={18} />
          </span>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Seu nome"
            className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
          />
        </div>
      </div>

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

      <div className="space-y-1.5 md:space-y-2">
        <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
          Confirmar senha
        </label>
        <div className="relative">
          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
            <Lock size={18} />
          </span>
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="••••••••"
            className="w-full pl-10 pr-10 py-2.5 md:py-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            title={showConfirmPassword ? "Ocultar senha" : "Mostrar senha"}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer transition-colors"
          >
            {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-1.5 md:space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Papel de acesso
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
              <UserCog size={18} />
            </span>
            <select
              value={papel}
              onChange={(e) =>
                setPapel(
                  e.target.value as "USUARIO",
                )
              }
              className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm cursor-pointer"
            >
              <option value="USUARIO">USUARIO</option>
            </select>
          </div>
        </div>

        <div className="space-y-1.5 md:space-y-2">
          <label className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Setor
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500">
              <Building2 size={18} />
            </span>
            <select
              value={setor}
              onChange={(e) =>
                setSetor(
                  e.target.value as
                    | "RECEPCAO"
                    | "TI"
                    | "RH"
                    | "ADMINISTRATIVO"
                    | "PRODUCAO",
                )
              }
              className="w-full pl-10 pr-4 py-2.5 md:py-3 bg-slate-100 dark:bg-slate-900/60 border border-slate-300 dark:border-slate-800 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all text-sm cursor-pointer"
            >
              <option value="TI">TI</option>
              <option value="RECEPCAO">RECEPCAO</option>
              <option value="RH">RH</option>
              <option value="ADMINISTRATIVO">ADMINISTRATIVO</option>
              <option value="PRODUCAO">PRODUCAO</option>
            </select>
          </div>
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
            Criando conta...
          </>
        ) : (
          "Criar conta"
        )}
      </button>

      <div className="flex justify-center text-sm">
        <Link
          href="/login"
          className="text-emerald-600 hover:text-emerald-500 transition-colors"
        >
          ← Já tenho uma conta
        </Link>
      </div>
    </form>
  );
}
