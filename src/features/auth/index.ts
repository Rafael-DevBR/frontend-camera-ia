// src/features/auth/index.ts

// Exportação das páginas públicas desta Feature
export { LoginPage } from "./presentation/components/LoginPage";

// Exportação dos hooks e estados globais necessários para a apresentação externa
export { useAuthStore } from "./presentation/store/useAuthStore";
export { useCurrentUser } from "./presentation/hooks/useCurrentUser";

// Exportação de interfaces de entidade essenciais
export type { User } from "./domain/entities/User";
