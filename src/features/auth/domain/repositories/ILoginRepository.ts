import { LoginResponse } from "../entities/LoginResponse";

export interface ILoginRepository {
  login(email: string, password: string): Promise<LoginResponse>;
}