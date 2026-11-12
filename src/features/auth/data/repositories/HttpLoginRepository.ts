import { ILoginRepository } from "../../domain/repositories/ILoginRepository";
import { LoginResponse } from "../../domain/entities/LoginResponse";
import { LoginResponseDto } from "../dto/LoginResponse";
import { UserMapper } from "../mappers/UserMapper";
import { apiClient } from "../../../shared/api/client";

export class HttpLoginRepository implements ILoginRepository {
  async login(email: string, password: string): Promise<LoginResponse> {
    const response = await apiClient<LoginResponseDto>("/auth/entrar", {
      method: "POST",
      body: JSON.stringify({ email_acesso: email, senha_acesso: password }),
    });

    return {
      token: response.accessToken,
      user: UserMapper.toDomain(response.user),
    };
  }
}
