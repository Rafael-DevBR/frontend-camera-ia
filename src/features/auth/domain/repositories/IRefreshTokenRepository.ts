export interface IRefreshTokenRepository {
  refreshToken(): Promise<{ token: string }>;
}