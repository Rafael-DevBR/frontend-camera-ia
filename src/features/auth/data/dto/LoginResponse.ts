// src/features/auth/data/dto/LoginResponse.ts
export type UserDto = {
  nome_completo: string;
  email_acesso: string;
  papel: "ADMIN" | "USUARIO" | "SUPER_ADMIN";
  setor_acesso:
    | "RECEPCAO"
    | "TI"
    | "RH"
    | "ADMINISTRATIVO"
    | "PRODUCAO";
};

export type LoginResponseDto = {
  accessToken: string;
  user: UserDto;
};
