/*
// src/features/auth/domain/repositories/IAuthRepository.ts
import { RegisterUser } from "../entities/RegisterUser";
import { User } from "../entities/User";

export interface IAuthRepository {
  login(
    email: string,
    password: string,
  ): Promise<{ token: string; user: User }>;

  forgotPassword(email: string): Promise<void>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<User>;
  refreshToken(): Promise<{ token: string }>;
  resetPassword(token: string, password: string): Promise<void>;
  registerUser(data: RegisterUser): Promise<User>;
}
  */
