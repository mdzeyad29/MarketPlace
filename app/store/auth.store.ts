import { create } from "zustand";

type Role = "customer" | "shopkeeper";

interface User {
  id: string;
  email: string;
  role: Role;
}

interface AuthState {
  users: User[];              // 👈 array (mock DB)
  currentUser: User | null;   // 👈 logged in user
  isAuthenticated: boolean;

  login: (user: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  users: [],
  currentUser: null,
  isAuthenticated: false,

  login: (user) =>
    set((state) => ({
      users: [...state.users, user],   // 👈 store in array
      currentUser: user,
      isAuthenticated: true,
    })),

  logout: () =>
    set({
      currentUser: null,
      isAuthenticated: false,
    }),
}));
