import { useMutation } from "@tanstack/react-query";
import { ForgotPasswordUseCase } from "../../domain/use-cases/ForgotPasswordUseCase";
import { HttpForgotPasswordRepository } from "../../data/repositories/HttpForgotPasswordRepository";

const forgotPasswordRepository = new HttpForgotPasswordRepository();
const forgotPasswordUseCase = new ForgotPasswordUseCase(forgotPasswordRepository);

export function useForgotPassword() {
  return useMutation({
    mutationFn: (email: string) => forgotPasswordUseCase.execute(email),
  });
}
