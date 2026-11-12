// src/features/auth/presentation/hooks/useLogin.ts
import { useMutation } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { HttpLoginRepository } from "../../data/repositories/HttpLoginRepository";
import { LoginUseCase } from "../../domain/use-cases/LoginUseCase";
import { useAuthStore } from "../store/useAuthStore";

const loginRepository = new HttpLoginRepository();
const loginUseCase = new LoginUseCase(loginRepository);

export function useLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      loginUseCase.execute(email, password),
    onSuccess: (data) => {
      // Salva dados no Zustand + Cookie
      setAuth(data.token, data.user);

      // Redireciona o usuário para onde tentou ir, ou para /cameras (dashboard padrão)
      const from = searchParams.get("from") || "/cameras";
      router.push(from);
      /*router.refresh();*/
    },
  });
}
