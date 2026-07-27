// src/features/dashboard/data/repositories/HttpCameraRepository.ts
import { ICameraRepository } from "../../domain/repositories/ICameraRepository";
import { Camera } from "../../domain/entities/Camera";
import { CameraDto } from "../dto/CameraResponse";
import { CameraMapper } from "../mappers/CameraMapper";
import { apiClient } from "@/features/shared/api/client";

function getCookie(name: string): string | null {
  if (typeof window === "undefined") return null;
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(";").shift() || null;
  return null;
}

export class HttpCameraRepository implements ICameraRepository {
  async getCameras(): Promise<Camera[]> {
    const token = getCookie("auth-token");

    // Rota protegida do backend que trará a lista de câmeras do banco de dados
    const response = await apiClient<CameraDto[]>("/cameras", {
      headers: {
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
    });

    return response.map(CameraMapper.toDomain);
  }
}
