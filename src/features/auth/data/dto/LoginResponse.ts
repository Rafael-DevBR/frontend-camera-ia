// src/features/auth/data/dto/LoginResponse.ts
export type UserDto = {
  id: string;
  email: string;
  name: string;
  createdAt?: string; // Campos adicionais que o backend envia mas o domínio não precisa
};

export type LoginResponseDto = {
  access_token: string;
  user: UserDto;
};