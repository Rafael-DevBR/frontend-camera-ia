// src/features/auth/domain/use-cases/RefreshTokenUseCase.ts
import { IAuthRepository } from '../repositories/IAuthRepository';

export class RefreshTokenUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute() {
    return this.authRepository.refreshToken();
  }
}