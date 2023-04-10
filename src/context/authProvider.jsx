import { createContext } from "react";
import { useToggle } from "../lib/customHooks";
import { userContext } from "./userContext";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useToggle();

  const { token, user, setUserData, isLoggedIn, handleLogin, handleLogout } = userContext();

  const value = {
    token,
    user,
    setUserData,
    isLoggedIn,
    isLoading,
    setLoading,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
