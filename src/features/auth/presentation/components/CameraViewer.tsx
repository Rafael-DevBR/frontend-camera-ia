// src/features/dashboard/presentation/components/CameraViewer.tsx
'use client';

import { useCameraStore } from '../store/useCameraStore';
import { Camera as CameraEntity } from '../../domain/entities/Camera';
import { ShieldAlert, Eye } from 'lucide-react';
import { useState, useEffect } from 'react';

interface CameraViewerProps {
  cameras: CameraEntity[];
}

export function CameraViewer({ cameras }: CameraViewerProps) {
  const { selectedCameraId } = useCameraStore();
  const selectedCamera = cameras.find((c) => c.id === selectedCameraId);
  const [timestamp, setTimestamp] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimestamp(now.toLocaleTimeString('pt-BR') + ' - ' + now.toLocaleDateString('pt-BR'));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!selectedCamera) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-900 p-8 text-center text-slate-500">
        <Eye size={48} className="text-slate-400 dark:text-slate-700 mb-4 animate-pulse" />
        <p>Selecione uma câmera para visualizar a transmissão ao vivo</p>
      </div>
    );
  }

  const isOnline = selectedCamera.status === 'ONLINE';

  return (
    <div className="flex-1 flex flex-col bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden p-4 md:p-6 space-y-4 shadow-sm transition-colors duration-200">
      {/* Detalhes do Topo */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
        <div>
          <h3 className="text-base md:text-lg font-bold text-slate-800 dark:text-slate-100 flex items-center space-x-2">
            <span>{selectedCamera.name}</span>
            <span className="text-[10px] md:text-xs font-mono text-slate-600 dark:text-slate-500 px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded-md border border-slate-300 dark:border-slate-700">
              LOC: {selectedCamera.location}
            </span>
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-mono">{timestamp}</p>
        </div>

        <div className="flex items-center space-x-3">
          <span className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
            isOnline
              ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30'
              : 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400 border border-red-300 dark:border-red-500/30'
          }`}>
            <span className={`w-2 h-2 rounded-full ${isOnline ? 'bg-emerald-500 animate-ping' : 'bg-red-500'}`} />
            <span>{selectedCamera.status}</span>
          </span>
        </div>
      </div>

      {/* Container de Vídeo Simulado */}
      <div className="flex-1 bg-slate-950 rounded-xl relative overflow-hidden flex items-center justify-center border border-slate-800 shadow-inner group aspect-video min-h-[220px] md:min-h-[320px]">
        {isOnline ? (
          <>
            <img
              src={selectedCamera.streamUrl}
              alt={selectedCamera.name}
              className="w-full h-full object-cover opacity-90 transition-opacity duration-300"
            />
            {/* Grade HUD */}
            <div className="absolute inset-0 border border-emerald-500/10 pointer-events-none grid grid-cols-3 grid-rows-3">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="border-[0.5px] border-slate-500/5" />
              ))}
            </div>
            {/* Info Transmissão */}
            <div className="absolute top-3 left-3 md:top-4 md:left-4 flex items-center space-x-2 bg-slate-950/80 px-2.5 py-1 rounded-md text-[10px] md:text-xs font-mono text-slate-200 border border-slate-800">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>GRAVANDO</span>
            </div>
            <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 bg-slate-950/80 px-2.5 py-1 rounded-md text-[10px] md:text-xs font-mono text-slate-400 border border-slate-800">
              ISO 400 | 1080p@30fps
            </div>
          </>
        ) : (
          <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center space-y-4 p-4 text-center">
            <ShieldAlert size={40} className="text-red-500/80" />
            <div>
              <p className="text-slate-200 font-semibold text-sm">Sem Sinal de Vídeo</p>
              <p className="text-xs text-slate-500 mt-1">Verifique as conexões físicas da câmera</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}