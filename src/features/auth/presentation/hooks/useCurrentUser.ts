// src/features/auth/presentation/hooks/useCurrentUser.ts
"use client";

import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { HttpCurrentUserRepository } from "../../data/repositories/HttpCurrentUserRepository";
import { GetCurrentUserUseCase } from "../../domain/use-cases/GetCurrentUserUseCase";
import { useAuthStore } from "../store/useAuthStore";

const currentUserRepository = new HttpCurrentUserRepository();
const getCurrentUserUseCase = new GetCurrentUserUseCase(currentUserRepository);

export function useCurrentUser() {
  const { isAuthenticated, logout } = useAuthStore();

  const query = useQuery({
    queryKey: ["currentUser"],
    queryFn: () => getCurrentUserUseCase.execute(),
    enabled: isAuthenticated,
    retry: false,
  });

  // Limpa o estado se a requisição de validação do token falhar
  useEffect(() => {
    if (query.isError) {
      logout();
    }
  }, [query.isError, logout]);

  return query;
}
