import { createContext } from "react";
import { useToggle } from "../lib/customHooks";
import { categoriesContext } from "./categoriesContext";
import { transactionsContext } from "./transactionsContext";
import { userContext } from "./userContext";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoading, setLoading] = useToggle();

  const { token, user, isLoggedIn, handleLogin, handleLogout } = userContext();
  const { categoriesList, getCategories } = categoriesContext(token);
  const { transactionsList, setTransactionsList, transactionsSummary, setTransactionsSummary, getTransactionData } = transactionsContext(token);

  const value = {
    token,
    user,
    isLoggedIn,
    isLoading,
    setLoading,
    categoriesList,
    getCategories,
    transactionsList,
    setTransactionsList,
    transactionsSummary,
    setTransactionsSummary,
    getTransactionData,
    onLogin: handleLogin,
    onLogout: handleLogout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContext;
