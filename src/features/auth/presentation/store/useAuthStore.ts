// src/features/auth/presentation/store/useAuthStore.ts
import { create } from 'zustand';
import { User } from '../../domain/entities/User';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  setAuth: (token: string, user: User) => void;
  logout: () => void;
  hydrate: () => void;
}

const getInitialAuthState = () => {
  if (typeof window === 'undefined') {
    return { user: null, isAuthenticated: false };
  }
  const userJson = localStorage.getItem('user-data');
  const hasToken = document.cookie.includes('auth-token=');
  if (userJson && hasToken) {
    try {
      return { user: JSON.parse(userJson), isAuthenticated: true };
    } catch {
      localStorage.removeItem('user-data');
    }
  }
  return { user: null, isAuthenticated: false };
};

export const useAuthStore = create<AuthState>((set) => ({
  ...getInitialAuthState(),

  setAuth: (token, user) => {
    // Grava o cookie do token JWT
    document.cookie = `auth-token=${token}; path=/; max-age=${60 * 60 * 24 * 7}; SameSite=Lax`;
    // Guarda o usuário no localStorage para manter a UI reativa ao atualizar a página
    localStorage.setItem('user-data', JSON.stringify(user));
    set({ user, isAuthenticated: true });
  },

  logout: () => {
    // Remove o cookie expirando a data dele
    document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
    localStorage.removeItem('user-data');
    set({ user: null, isAuthenticated: false });
  },

  hydrate: () => {
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