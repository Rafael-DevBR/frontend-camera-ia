import { ILogoutRepository } from "../../domain/repositories/ILogoutRepository";
import { apiClient } from "../../../shared/api/client";

export class HttpLogoutRepository implements ILogoutRepository {
  async logout(): Promise<void> {
    await apiClient("/auth/logout", { method: "POST" }).catch(() => {});
  }
}
