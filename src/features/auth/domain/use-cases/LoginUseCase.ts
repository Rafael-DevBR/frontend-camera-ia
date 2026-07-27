// src/features/auth/domain/use-cases/LoginUseCase.ts
import { IAuthRepository } from "../repositories/IAuthRepository";

export class LoginUseCase {
  constructor(private readonly authRepository: IAuthRepository) {}

  async execute(email: string, password: string) {
    if (!email || !password) {
      throw new Error("E-mail e senha são obrigatórios.");
    }
    return this.authRepository.login(email, password);
  }
}
