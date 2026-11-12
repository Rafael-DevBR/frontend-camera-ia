// src/features/auth/data/mappers/UserMapper.ts

import { User } from "../../domain/entities/User";
import { UserDto } from "../dto/LoginResponse";

export class UserMapper {
  static toDomain(dto: UserDto): User {
    return {
      id: dto.email_acesso,
      email: dto.email_acesso,
      name: dto.nome_completo,
      papel: dto.papel,
      setor_acesso: dto.setor_acesso,
    };
  }
}
