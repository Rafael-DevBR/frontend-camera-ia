// src/features/auth/domain/use-cases/LogoutUseCase.ts
import { ILogoutRepository } from "../repositories/ILogoutRepository";

export class LogoutUseCase {
  constructor(private readonly logoutRepository: ILogoutRepository) {}

  async execute() {
    return this.logoutRepository.logout();
  }
}
