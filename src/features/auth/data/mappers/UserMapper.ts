// src/features/auth/data/mappers/UserMapper.ts

import { User } from '../../domain/entities/User';
import { UserDto } from '../dto/LoginResponse';

export class UserMapper {
  static toDomain(dto: UserDto): User {
    return {
      id: dto.id,
      email: dto.email,
      name: dto.name,
    };
  }
}