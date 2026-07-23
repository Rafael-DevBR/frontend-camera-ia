// src/features/auth/data/mutations/useLogin.ts
import { useMutation } from '@tanstack/react-query';
import { HttpAuthRepository } from '../repositories/HttpAuthRepository';
import { useAuthStore } from '../../presentation/store/useAuthStore';

// Instanciamos o adaptador concreto
const authRepository = new HttpAuthRepository();

export function useLogin() {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => 
      authRepository.login(email, password),
    onSuccess: (data) => {
      // Atualiza o estado da apresentação
      setAuth(data.token, data.user);
    },
  });
}