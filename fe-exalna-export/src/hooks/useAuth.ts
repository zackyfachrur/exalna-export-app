import { useContext, createContext } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  handleLogout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
};
