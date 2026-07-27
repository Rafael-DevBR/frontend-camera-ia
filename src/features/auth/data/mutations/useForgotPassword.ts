// src/features/auth/data/mutations/useForgotPassword.ts

import { useMutation } from "@tanstack/react-query";
import { HttpAuthRepository } from "../repositories/HttpAuthRepository";

const authRepository = new HttpAuthRepository();
export function useForgotPassword() {
  return useMutation({
    mutationFn: (email: string) =>
      authRepository.forgotPassword(email),
  });
}