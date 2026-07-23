// src/features/dashboard/presentation/components/Sidebar.tsx
'use client';

import { useAuthStore } from '@/features/auth';
import { useThemeStore } from '@/features/shared/store/useThemeStore';
import {
  LayoutDashboard,
  Camera,
  Settings,
  ShieldAlert,
  LogOut,
  User as UserIcon,
  Sun,
  Moon,
  Menu,
  X,
} from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

export function Sidebar() {
  const { user, logout } = useAuthStore();
  const { theme, toggleTheme } = useThemeStore();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLogout = () => {
    logout();
    router.push('/login');
    router.refresh();
  };

  const menuItems = [
    { icon: <LayoutDashboard size={20} />, label: 'Visão Geral', path: '/' },
    { icon: <Camera size={20} />, label: 'Câmeras', path: '/cameras' },
    { icon: <ShieldAlert size={20} />, label: 'Alertas', path: '/alertas' },
    { icon: <Settings size={20} />, label: 'Configurações', path: '/configuracoes' },
  ];

  const sidebarContent = (
    <aside className="w-64 bg-slate-100 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col justify-between h-full p-6 transition-colors duration-200">
      <div className="space-y-8">
        {/* Header/Logo + Tema */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-600 to-amber-500 flex items-center justify-center font-bold text-slate-950 flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="#141313" height="18px" width="18px" viewBox="0 0 60.051 60.051">
                <g>
                  <path d="M56.963,32.026H55.14c-1.703,0-3.088,1.385-3.088,3.088v3.912h-10v-6.219c3.646-1.177,5.957-6.052,5.957-12.781   c0-7.235-2.669-12.333-6.8-12.988c-0.052-0.008-0.104-0.012-0.157-0.012h-40c-0.481,0-0.893,0.343-0.982,0.816l-0.001,0   c-0.02,0.107-0.472,2.648,1.243,4.714c1.138,1.371,2.92,2.169,5.292,2.395c-0.357,1.59-0.552,3.31-0.552,5.075   c0,7.29,3.075,13,7,13h21v12.967c0,1.672,1.36,3.033,3.033,3.033h1.935c1.308,0,2.415-0.837,2.84-2h10.193v2.912   c0,1.703,1.385,3.088,3.088,3.088h1.823c1.703,0,3.088-1.385,3.088-3.088V35.114C60.051,33.411,58.666,32.026,56.963,32.026z"/>
                </g>
              </svg>
            </div>
            <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-amber-600 dark:from-emerald-300 dark:to-amber-400 bg-clip-text text-transparent truncate">
              Platform Vigilant
            </span>
          </div>

          <button
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro'}
            className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-all cursor-pointer"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} className="text-slate-700" />}
          </button>
        </div>

        {/* Links do Menu */}
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setMobileOpen(false)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-emerald-100 dark:bg-gradient-to-r dark:from-emerald-950 dark:to-slate-900 border-l-4 border-emerald-500 text-emerald-700 dark:text-emerald-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/50 hover:text-slate-900 dark:hover:text-slate-200'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Perfil do Usuário e Logout */}
      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 space-y-4">
        {user && (
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400 border border-slate-300 dark:border-slate-700 flex-shrink-0">
              <UserIcon size={20} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">{user.name}</p>
              <p className="text-xs text-slate-500 dark:text-slate-500 truncate">{user.email}</p>
            </div>
          </div>
        )}

        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 bg-slate-200/70 dark:bg-slate-800/50 hover:bg-red-100 dark:hover:bg-red-950/30 text-slate-600 dark:text-slate-400 hover:text-red-600 dark:hover:text-red-400 cursor-pointer text-sm font-medium rounded-xl border border-slate-300/60 dark:border-slate-700/50 hover:border-red-300 dark:hover:border-red-900/50 transition-all active:scale-[0.98]"
        >
          <LogOut size={16} />
          <span>Sair do Sistema</span>
        </button>
      </div>
    </aside>
  );

  return (
    <>
      {/* Top Header para telas pequenas (< md) */}
      <div className="md:hidden w-full bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 px-4 py-3 flex items-center justify-between z-30 sticky top-0">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-emerald-600 to-amber-500 flex items-center justify-center font-bold text-slate-950">
            <span className="text-xs">PV</span>
          </div>
          <span className="text-sm font-bold bg-gradient-to-r from-emerald-600 to-amber-600 dark:from-emerald-300 dark:to-amber-400 bg-clip-text text-transparent">
            Vigilant Intelligence
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {theme === 'dark' ? <Sun size={18} className="text-amber-400" /> : <Moon size={18} />}
          </button>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Drawer Overlay no Mobile */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar Flutuante no Mobile */}
      <div className={`md:hidden fixed top-0 left-0 bottom-0 z-50 transition-transform duration-300 ${
        mobileOpen ? 'translate-x-0' : '-translate-x-full'
      }`}>
        {sidebarContent}
      </div>

      {/* Sidebar Fixa no Desktop (>= md) */}
      <div className="hidden md:flex h-full">
        {sidebarContent}
      </div>
    </>
  );
}