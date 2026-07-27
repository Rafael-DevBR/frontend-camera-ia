import { RegisterUser } from "../entities/RegisterUser";
import { User } from "../entities/User";

export interface IRegisterRepository {
  registerUser(data: RegisterUser): Promise<User>;
}