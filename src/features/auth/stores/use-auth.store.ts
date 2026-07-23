// src/features/auth/store/use-auth.store.ts
import { create } from 'zustand';

interface User {
  id: string;
  email: string;
  name: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  hydrate: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  setAuth: (token, user) => {
    // Salva o token no Cookie (expira em 7 dias)
    document.cookie = `auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
    
    // Salva o usuário no localStorage para persistência de UI
    localStorage.setItem('user-data', JSON.stringify(user));

    set({ user, isAuthenticated: true });
  },

  logout: () => {
    // Remove o cookie
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    // Limpa o localStorage
    localStorage.removeItem('user-data');

    set({ user: null, isAuthenticated: false });
  },

  hydrate: () => {
    // Restaura o estado ao recarregar a página no cliente
    if (typeof window === 'undefined') return;
    
    const userJson = localStorage.getItem('user-data');
    const hasToken = document.cookie.includes('auth-token=');

    if (userJson && hasToken) {
      try {
        set({ user: JSON.parse(userJson), isAuthenticated: true });
      } catch {
        localStorage.removeItem('user-data');
      }
    }
  }
}));