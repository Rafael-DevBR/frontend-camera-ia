// src/features/auth/domain/use-cases/ForgotPasswordUseCase.ts
import { IAuthRepository } from "../repositories/IAuthRepository";

export class ForgotPasswordUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute(email: string) {
    if (!email) {
      throw new Error("E-mail é obrigatório.");
    }
    return this.authRepository.forgotPassword(email);
  }
}