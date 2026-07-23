// src/features/auth/domain/repositories/IAuthRepository.ts
import { User } from '../entities/User';

export interface IAuthRepository {
  login(email: string, password: string): Promise<{ token: string; user: User }>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<User>;
  refreshToken(): Promise<{ token: string }>;
}