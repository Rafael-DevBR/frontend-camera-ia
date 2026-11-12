import { ForgotPassword } from "../entities/ForgotPassword";

export interface IForgotPasswordRepository {
  forgotPassword(forgotPassword: ForgotPassword): Promise<void>;
}
