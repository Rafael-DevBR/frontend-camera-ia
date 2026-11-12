// src/features/auth/domain/entities/User.ts
export interface User {
  id: string;
  email: string;
  name: string;
  papel?: "ADMIN" | "USUARIO" | "SUPER_ADMIN";
  setor_acesso?:
    | "RECEPCAO"
    | "TI"
    | "RH"
    | "ADMINISTRATIVO"
    | "PRODUCAO";
}
