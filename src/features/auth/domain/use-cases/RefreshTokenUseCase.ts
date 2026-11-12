// src/features/auth/domain/use-cases/RefreshTokenUseCase.ts
import {IRefreshTokenRepository} from "../repositories/IRefreshTokenRepository";

export class RefreshTokenUseCase {
  constructor(private readonly refreshTokenRepository: IRefreshTokenRepository) {}

  async execute() {
    return this.refreshTokenRepository.refreshToken();
  }
}
