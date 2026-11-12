// src/features/auth/domain/entities/LoginResponse.ts
import { User } from "./User";
export interface LoginResponse {
  token: string;
  user: User;
}