// src/features/auth/domain/entities/RegisterUser.ts
export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  papel: "ADMIN" | "USUARIO" | "SUPER_ADMIN";
  setor: "RECEPCAO" | "TI" | "RH" | "ADMINISTRATIVO" | "PRODUCAO";
}