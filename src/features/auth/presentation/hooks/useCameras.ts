// src/features/dashboard/presentation/hooks/useCameras.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { HttpCameraRepository } from "../../data/repositories/HttpCameraRepository";
import { GetCamerasUseCase } from "../../domain/use-cases/GetCamerasUseCase";
import { useCameraStore } from "../store/useCameraStore";

const cameraRepository = new HttpCameraRepository();
const getCamerasUseCase = new GetCamerasUseCase(cameraRepository);

export function useCameras() {
  const { selectedCameraId, selectCamera } = useCameraStore();

  const query = useQuery({
    queryKey: ["cameras"],
    queryFn: () => getCamerasUseCase.execute(),
  });

  // Define automaticamente a primeira câmera online como selecionada por padrão
  useEffect(() => {
    if (query.data && query.data.length > 0 && !selectedCameraId) {
      const firstOnline =
        query.data.find((c) => c.status === "ONLINE") || query.data[0];
      selectCamera(firstOnline.id);
    }
  }, [query.data, selectedCameraId, selectCamera]);

  return query;
}
