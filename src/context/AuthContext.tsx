import React, { createContext, useContext, useState, useEffect } from 'react';
import { authStorage } from '../lib/auth';

interface User {
  id: string;
  email: string;
  name?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (access: string, refresh: string, user: User) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = authStorage.getAccessToken();

    if (token) {
      setUser({
        id: 'temp',
        email: 'logged_in_user'
      });
    }

    setIsLoading(false);
  }, []);

  const login = (access: string, refresh: string, userData: User) => {
    authStorage.setTokens(access, refresh);
    setUser(userData);
  };

  const logout = () => {
    authStorage.clearTokens();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated: !!user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside provider");
  return context;
};