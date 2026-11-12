// domain/repositories/ILogoutRepository.ts

export interface ILogoutRepository {
  logout(): Promise<void>;
}