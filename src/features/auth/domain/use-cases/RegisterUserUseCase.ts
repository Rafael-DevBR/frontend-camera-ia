// src/features/auth/domain/use-cases/RegisterUserUseCase.ts
import { User } from "../entities/User";
import { RegisterUser } from "../entities/RegisterUser";
import { IAuthRepository } from "../repositories/IAuthRepository";

export class RegisterUseCase {
  constructor(
    private readonly authRepository: IAuthRepository,
  ) {}

  async execute(data: RegisterUser): Promise<User> {
    const { name, email, password, confirmPassword } = data;

    if (!name.trim()) {
      throw new Error("Nome é obrigatório.");
    }

    if (!email.trim()) {
      throw new Error("E-mail é obrigatório.");
    }

    if (!password) {
      throw new Error("Senha é obrigatória.");
    }

    if (!confirmPassword) {
      throw new Error("Confirmação da senha é obrigatória.");
    }

    if (password !== confirmPassword) {
      throw new Error("As senhas não conferem.");
    }

    return this.authRepository.registerUser({
      name,
      email,
      password,
      confirmPassword,
    });
  }
}