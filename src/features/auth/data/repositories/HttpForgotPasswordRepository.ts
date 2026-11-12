import { IForgotPasswordRepository } from "../../domain/repositories/IForgotPasswordRepository";
import { ForgotPassword } from "../../domain/entities/ForgotPassword";
import { apiClient } from "../../../shared/api/client";

export class HttpForgotPasswordRepository implements IForgotPasswordRepository {
  async forgotPassword(forgotPassword: ForgotPassword): Promise<void> {
    await apiClient("/auth/forgot-password", {
      method: "POST",
      body: JSON.stringify({ email: forgotPassword.email }),
    });
  }
}
