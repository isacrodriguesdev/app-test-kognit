import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";

interface AuthContextProps {
  authenticated: boolean;
  login: (email: string, password: string) => Promise<AuthResult>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}

interface AuthProviderProps {
  children: React.ReactNode;
}

interface AuthResult {
  error: string | null;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("authenticated");

    if (isAuthenticated) {
      setAuthenticated(true);
    } else {
      navigate("/login");
    }
  }, []);

  async function login(email: string, password: string): Promise<AuthResult> {
    if (email === "isacrodriguesdev@protonmail.com" && password === "123456") {
      setAuthenticated(true);
      localStorage.setItem("authenticated", "true");
      navigate("/");
      return { error: null };
    }

    return { error: "Invalid credentials" };
  }

  const logout = () => {
    setAuthenticated(false);
    localStorage.removeItem("authenticated");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
