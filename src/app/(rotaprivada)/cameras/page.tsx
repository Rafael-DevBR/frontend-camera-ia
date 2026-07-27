// src/app/cameras/page.tsx
"use client";

import { Sidebar } from "@/features/auth/presentation/components/Sidebar";
import { CameraViewer } from "@/features/auth/presentation/components/CameraViewer";
import { CameraCarousel } from "@/features/auth/presentation/components/CameraCarousel";
import { useCameras } from "@/features/auth/presentation/hooks/useCameras";
import { useCurrentUser, useAuthStore } from "@/features/auth";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";

export default function CamerasPage() {
  const hydrate = useAuthStore((state) => state.hydrate);

  useEffect(() => {
    hydrate();
  }, [hydrate]);

  useCurrentUser();
  const { data: cameras, isLoading: isCamerasLoading, error } = useCameras();

  const isInitialLoading = !cameras && isCamerasLoading;

  if (isInitialLoading) {
    return (
      <div className="flex h-screen w-screen items-center justify-center bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100">
        <div className="text-center space-y-4">
          <Loader2
            className="animate-spin text-emerald-500 mx-auto"
            size={40}
          />
          <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
            Carregando câmeras...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row min-h-screen md:h-screen w-full bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-x-hidden md:overflow-hidden transition-colors duration-200">
      <Sidebar />

      <main className="flex-1 p-4 md:p-6 flex flex-col overflow-y-auto md:overflow-hidden bg-slate-50 dark:bg-slate-950">
        <header className="mb-4 md:mb-6">
          <h1 className="text-xl md:text-2xl font-bold tracking-tight bg-gradient-to-r from-slate-800 to-slate-600 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
            Gestão de Câmeras
          </h1>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Visualização dedicada de todas as câmeras ativas no sistema
          </p>
        </header>

        {error ? (
          <div className="flex-1 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-800/80 rounded-2xl text-slate-500 dark:text-slate-400 p-6 text-center">
            <p className="font-semibold text-slate-700 dark:text-slate-300">
              Falha ao obter os dados das câmeras
            </p>
            <p className="text-xs text-slate-500 mt-1">
              Verifique a conexão de rede ou o serviço do backend.
            </p>
          </div>
        ) : (
          <CameraViewer cameras={cameras || []} />
        )}
      </main>

      {!error && cameras && cameras.length > 0 && (
        <CameraCarousel cameras={cameras} />
      )}
    </div>
  );
}
