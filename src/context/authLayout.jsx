import { useOutlet } from "react-router-dom";
import { AuthProvider } from "./authProvider";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider>{outlet}</AuthProvider>
  );
};