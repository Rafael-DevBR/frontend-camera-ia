import { User } from "../entities/User";

export interface ICurrentUserRepository {
  getCurrentUser(): Promise<User>;
}
