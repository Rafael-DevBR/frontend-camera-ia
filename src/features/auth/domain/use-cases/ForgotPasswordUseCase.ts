// src/features/auth/domain/use-cases/ForgotPasswordUseCase.ts
import { IForgotPasswordRepository } from "../repositories/IForgotPasswordRepository";

export class ForgotPasswordUseCase {
  constructor(private readonly iForgotPasswordRepository: IForgotPasswordRepository) {}

  async execute(email: string): Promise<void> {
    if (!email) {
      throw new Error("E-mail é obrigatório.");
    }
    await this.iForgotPasswordRepository.forgotPassword({ email });
  }
}