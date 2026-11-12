import { IRefreshTokenRepository } from "../../domain/repositories/IRefreshTokenRepository";
import { apiClient } from "../../../shared/api/client";

export class HttpRefreshTokenRepository implements IRefreshTokenRepository {
  async refreshToken(): Promise<{ token: string }> {
    const response = await apiClient<{ access_token: string }>(
      "/auth/refresh",
      { method: "POST" },
    );
    return { token: response.access_token };
  }
}
