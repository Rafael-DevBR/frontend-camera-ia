// src/features/dashboard/domain/repositories/ICameraRepository.ts
import { Camera } from '../entities/Camera';

export interface ICameraRepository {
  getCameras(): Promise<Camera[]>;
}