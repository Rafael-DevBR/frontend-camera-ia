// src/features/auth/domain/entities/ResetPassword.ts
export interface ResetPassword {
  token: string;
  password: string;
  confirmPassword: string;
}