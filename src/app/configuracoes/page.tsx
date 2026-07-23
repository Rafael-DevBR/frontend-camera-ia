// src/app/configuracoes/page.tsx
'use client';

import { Sidebar } from '@/features/auth/presentation/components/Sidebar';
import { useAuthStore } from '@/features/auth';
import { Settings, User, Bell, Server } from 'lucide-react';
import { useEffect } from 'react';

export default function ConfiguracoesPage() {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const { user } = useAuthStore();

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden md:overflow-hidden transition-colors duration-200">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 flex flex-col overflow-y-auto bg-slate-50 dark:bg-slate-950">
        <header className="mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent flex items-center gap-2">
            <Settings className="text-emerald-600 dark:text-emerald-400" size={26} />
            Configurações do Sistema
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Gerencie suas preferências de usuário, notificações e credenciais
          </p>
        </header>

        <div className="max-w-3xl space-y-4 md:space-y-6">
          {/* Perfil */}
          <div className="p-4 md:p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-sm">
            <h2 className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <User size={18} className="text-emerald-600 dark:text-emerald-400" />
              Perfil do Usuário
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="text-slate-500 dark:text-slate-400 block mb-1">Nome</label>
                <input
                  type="text"
                  readOnly
                  value={user?.name || ''}
                  className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-slate-800 dark:text-slate-300 focus:outline-none"
                />
              </div>
              <div>
                <label className="text-slate-500 dark:text-slate-400 block mb-1">E-mail</label>
                <input
                  type="email"
                  readOnly
                  value={user?.email || ''}
                  className="w-full bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 rounded-lg px-3 py-2 text-slate-800 dark:text-slate-300 focus:outline-none"
                />
              </div>
            </div>
          </div>

          {/* Notificações */}
          <div className="p-4 md:p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-sm">
            <h2 className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Bell size={18} className="text-emerald-600 dark:text-emerald-400" />
              Preferências de Notificação
            </h2>
            <div className="space-y-3 text-xs">
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-emerald-500 focus:ring-0" />
                <span className="text-slate-700 dark:text-slate-300">Receber alertas de movimento por e-mail</span>
              </label>
              <label className="flex items-center space-x-3 cursor-pointer">
                <input type="checkbox" defaultChecked className="rounded border-slate-300 dark:border-slate-800 bg-slate-100 dark:bg-slate-950 text-emerald-500 focus:ring-0" />
                <span className="text-slate-700 dark:text-slate-300">Notificações em tempo real no portal</span>
              </label>
            </div>
          </div>

          {/* Servidor */}
          <div className="p-4 md:p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-2xl space-y-4 shadow-sm">
            <h2 className="text-sm md:text-base font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Server size={18} className="text-emerald-600 dark:text-emerald-400" />
              Servidor & Conexão NestJS
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              URL da API: <code className="bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded text-emerald-600 dark:text-emerald-400 border border-slate-200 dark:border-slate-800">http://localhost:3000</code>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
