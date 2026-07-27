// src/features/auth/data/repositories/HttpAuthRepository.ts
import { IAuthRepository } from "../../domain/repositories/IAuthRepository";
import { User } from "../../domain/entities/User";
import { LoginResponseDto, UserDto } from "../dto/LoginResponse";
import { UserMapper } from "../mappers/UserMapper";
import { apiClient } from "../../../shared/api/client";

export class HttpAuthRepository implements IAuthRepository {
  async login(
    email: string,
    password: string,
  ): Promise<{ token: string; user: User }> {
    const response = await apiClient<LoginResponseDto>("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    });

    return {
      token: response.access_token,
      user: UserMapper.toDomain(response.user),
    };
  }

  async logout(): Promise<void> {
    // Caso o backend tenha uma rota para invalidar o token
    await apiClient("/auth/logout", { method: "POST" }).catch(() => {
      // Ignora erro se falhar no backend, pois o client vai se deslogar localmente de qualquer forma
    });
  }

  async getCurrentUser(): Promise<User> {
    const response = await apiClient<UserDto>("/auth/me");
    return UserMapper.toDomain(response);
  }

  async refreshToken(): Promise<{ token: string }> {
    const response = await apiClient<{ access_token: string }>(
      "/auth/refresh",
      {
        method: "POST",
      },
    );
    return { token: response.access_token };
  }

  async forgotPassword(email: string): Promise<void> {
  await apiClient("/auth/forgot-password", {
    method: "POST",
    body: JSON.stringify({ email }),
  });
  }
}
