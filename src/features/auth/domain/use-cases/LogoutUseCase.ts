// src/features/auth/domain/use-cases/LogoutUseCase.ts
import { IAuthRepository } from "../repositories/IAuthRepository";

export class LogoutUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute() {
    return this.authRepository.logout();
  }
}
