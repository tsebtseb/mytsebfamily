"use client";

import { createContext, useContext, useState, useEffect, useCallback } from "react";

interface AuthState {
  [key: string]: boolean;
}

interface AuthContextType {
  isAuthenticated: (route: string) => boolean;
  login: (route: string) => void;
  logout: (route: string) => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const routePasswords = {
  '/gallery/dada': '11081967',
  '/gallery/mama': '21101970',
  '/gallery/bro': '09091999',
  '/gallery/tseb': '2811'
};

export function AuthProvider({ children }: { children: React.ReactNode }){
    const [authState, setAuthState] = useState<AuthState>({});

    useEffect(() => {
        Object.keys(routePasswords).forEach(route => {
          const auth = localStorage.getItem(`gallery_auth_${route}`);
          if (auth === 'true') {
            setAuthState(prev => ({ ...prev, [route]: true }));
          }
        });
      }, []);

      const login = (route: string) => {
        setAuthState(prev => ({ ...prev, [route]: true }));
        localStorage.setItem(`gallery_auth_${route}`, 'true');
      };
    
      const logout = (route: string) => {
        setAuthState(prev => ({ ...prev, [route]: false }));
        localStorage.removeItem(`gallery_auth_${route}`);
      };
    
      const isAuthenticated = (route: string) => !!authState[route];

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );

}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
  }