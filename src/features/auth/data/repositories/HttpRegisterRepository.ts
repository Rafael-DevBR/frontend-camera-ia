import { IRegisterRepository } from "../../domain/repositories/IRegisterRepository";
import { User } from "../../domain/entities/User";
import { RegisterUser } from "../../domain/entities/RegisterUser";
import { RegisterResponseDto } from "../dto/RegisterResponse";
import { apiClient } from "../../../shared/api/client";

export class HttpRegisterRepository implements IRegisterRepository {
  async registerUser(data: RegisterUser): Promise<User> {
    const { name, email, password, papel, setor } = data;

    await apiClient<RegisterResponseDto>("/auth/inscrever", {
      method: "POST",
      body: JSON.stringify({
        nome_completo: name,
        email_acesso: email,
        senha_acesso: password,
        papel_acesso: papel,
        setor_acesso: setor,
      }),
    });

    return {
      id: email,
      email,
      name,
      papel,
      setor_acesso: setor,
    };
  }
}
