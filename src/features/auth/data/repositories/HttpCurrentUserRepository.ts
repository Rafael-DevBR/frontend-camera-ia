import { ICurrentUserRepository } from "../../domain/repositories/ICurrentUserRepository";
import { User } from "../../domain/entities/User";

export class HttpCurrentUserRepository implements ICurrentUserRepository {
  async getCurrentUser(): Promise<User> {
    if (typeof window === "undefined") {
      throw new Error("Sessão indisponível");
    }

    const userJson = localStorage.getItem("user-data");
    if (!userJson) {
      throw new Error("Usuário não encontrado");
    }

    return JSON.parse(userJson) as User;
  }
}
