// src/features/auth/domain/use-cases/LoginUseCase.ts
import { ILoginRepository } from "../repositories/ILoginRepository";

export class LoginUseCase {
  constructor(private readonly authRepository: ILoginRepository) {}

  async execute(email: string, password: string) {
    if (!email || !password) {
      throw new Error("E-mail e senha são obrigatórios.");
    }
    return this.authRepository.login(email, password);
  }
}
