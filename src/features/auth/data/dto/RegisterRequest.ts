// src/features/dashboard/data/dto/RegisterRequest
export type RegisterRequest = {
  nome_completo: string;
  email_acesso: string;
  senha_acesso: string;
  papel_acesso: "ADMIN" | "USUARIO" | "SUPER_ADMIN";
  setor_acesso:
    | "RECEPCAO"
    | "TI"
    | "RH"
    | "ADMINISTRATIVO"
    | "PRODUCAO";
};
