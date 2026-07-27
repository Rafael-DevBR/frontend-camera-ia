// src/features/dashboard/domain/use-cases/GetCamerasUseCase.ts
import { ICameraRepository } from "../repositories/ICameraRepository";

export class GetCamerasUseCase {
  constructor(private readonly cameraRepository: ICameraRepository) {}

  async execute() {
    return this.cameraRepository.getCameras();
  }
}
