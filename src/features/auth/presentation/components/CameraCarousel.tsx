// src/features/dashboard/presentation/components/CameraCarousel.tsx
"use client";

import { useCameraStore } from "../store/useCameraStore";
import { Camera as CameraEntity } from "../../domain/entities/Camera";

interface CameraCarouselProps {
  cameras: CameraEntity[];
}

export function CameraCarousel({ cameras }: CameraCarouselProps) {
  const { selectedCameraId, selectCamera } = useCameraStore();

  return (
    <div className="w-full lg:w-72 bg-slate-100 dark:bg-slate-900 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-800 flex flex-col p-4 md:p-6 transition-colors duration-200">
      <h3 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 lg:mb-4">
        Câmeras Disponíveis ({cameras.length})
      </h3>

      {/* Container Rolável - Horizontal no mobile/tablet, Vertical no Desktop */}
      <div className="flex flex-row lg:flex-col overflow-x-auto lg:overflow-y-auto gap-3 space-y-0 lg:space-y-3 custom-scrollbar pr-1 pb-2 lg:pb-0">
        {cameras.map((camera) => {
          const isSelected = selectedCameraId === camera.id;
          const isOnline = camera.status === "ONLINE";

          return (
            <button
              key={camera.id}
              onClick={() => (isSelected ? null : selectCamera(camera.id))}
              className={`min-w-[180px] lg:min-w-0 lg:w-full text-left rounded-xl overflow-hidden bg-white dark:bg-slate-950 border transition-all cursor-pointer flex-shrink-0 ${
                isSelected
                  ? "border-emerald-500 ring-1 ring-emerald-500 shadow-md shadow-emerald-500/10"
                  : "border-slate-200 dark:border-slate-800/60 hover:border-slate-300 dark:hover:border-slate-700"
              }`}
            >
              {/* Miniatura do Feed */}
              <div className="h-20 lg:h-24 w-full bg-slate-900 relative overflow-hidden">
                {isOnline ? (
                  <img
                    src={camera.thumbnailUrl}
                    alt={camera.name}
                    className="w-full h-full object-cover opacity-70"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-900 text-slate-500 text-xs font-semibold">
                    OFFLINE
                  </div>
                )}
                <div className="absolute top-2 right-2">
                  {isOnline ? (
                    <span className="flex w-2.5 h-2.5 bg-emerald-500 rounded-full border border-slate-950" />
                  ) : (
                    <span className="flex w-2.5 h-2.5 bg-red-500 rounded-full border border-slate-950" />
                  )}
                </div>
              </div>

              {/* Informações */}
              <div className="p-2.5 lg:p-3">
                <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 truncate">
                  {camera.name}
                </p>
                <p className="text-[10px] text-slate-500 dark:text-slate-500 truncate mt-0.5">
                  {camera.location}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
