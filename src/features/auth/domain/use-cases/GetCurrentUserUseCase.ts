// domain/use-cases/GetCurrentUserUseCase.ts
import { ICurrentUserRepository } from "../repositories/ICurrentUserRepository";

export class GetCurrentUserUseCase {
  constructor(
    private readonly currentUserRepository: ICurrentUserRepository,
  ) {}

  async execute() {
    return this.currentUserRepository.getCurrentUser();
  }
}