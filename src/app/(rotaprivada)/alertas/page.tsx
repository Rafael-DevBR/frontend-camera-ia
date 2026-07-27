// src/app/alertas/page.tsx
"use client";

import { Sidebar } from "@/features/auth/presentation/components/Sidebar";
import { useAuthStore } from "@/features/auth";
import { ShieldAlert, AlertTriangle, CheckCircle2, Info } from "lucide-react";
import { useEffect } from "react";

export default function AlertasPage() {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  const mockAlerts = [
    {
      id: 1,
      title: "Movimento Detectado - Setor A",
      time: "Há 5 minutos",
      type: "warning",
      description:
        "Movimento atípico detectado pela câmera 01 no período noturno.",
    },
    {
      id: 2,
      title: "Conexão Restaurada - Câmera Externa",
      time: "Há 12 minutos",
      type: "info",
      description:
        "A câmera de entrada principal restabeleceu a conexão com o servidor.",
    },
    {
      id: 3,
      title: "SISTEMA OPERACIONAL",
      time: "Há 1 hora",
      type: "success",
      description:
        "Todos os módulos de segurança e telemetria estão operando normalmente.",
    },
  ];

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden md:overflow-hidden transition-colors duration-200">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 flex flex-col overflow-y-auto bg-slate-50 dark:bg-slate-950">
        <header className="mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent flex items-center gap-2">
            <ShieldAlert
              className="text-amber-500 dark:text-amber-400"
              size={26}
            />
            Central de Alertas e Notificações
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Registro de eventos, avisos e telemetria do sistema
          </p>
        </header>

        <div className="space-y-3 md:space-y-4">
          {mockAlerts.map((alert) => (
            <div
              key={alert.id}
              className="p-4 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 flex items-start gap-4 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm"
            >
              <div className="mt-1 flex-shrink-0">
                {alert.type === "warning" && (
                  <AlertTriangle className="text-amber-500" size={20} />
                )}
                {alert.type === "info" && (
                  <Info className="text-sky-500" size={20} />
                )}
                {alert.type === "success" && (
                  <CheckCircle2 className="text-emerald-500" size={20} />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center justify-between gap-1">
                  <h3 className="font-semibold text-sm text-slate-800 dark:text-slate-200 truncate">
                    {alert.title}
                  </h3>
                  <span className="text-[11px] text-slate-400 dark:text-slate-500">
                    {alert.time}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {alert.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
