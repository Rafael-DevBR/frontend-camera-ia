// src/features/auth/domain/entities/RegisterUser.ts
export interface RegisterUser{
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}