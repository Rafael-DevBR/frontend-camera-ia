// src/features/auth/domain/use-cases/GetCurrentUserUseCase.ts
import { IAuthRepository } from "../repositories/IAuthRepository";

export class GetCurrentUserUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute() {
    return this.authRepository.getCurrentUser();
  }
}
