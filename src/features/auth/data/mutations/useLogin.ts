// src/features/auth/data/mutations/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { HttpLoginRepository } from "../repositories/HttpLoginRepository";
import { useAuthStore } from "../../presentation/store/useAuthStore";

const loginRepository = new HttpLoginRepository();

export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginRepository.login(email, password),
    onSuccess: (data) => {
      // Atualiza o estado da apresentação
      setAuth(data.token, data.user);
    },
  });
}
