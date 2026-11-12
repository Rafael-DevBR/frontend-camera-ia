import { ResetPassword } from "../entities/ResetPassword";

export interface IResetPasswordRepository {
  resetPassword(data: ResetPassword): Promise<void>;
}