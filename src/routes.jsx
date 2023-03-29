import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import { AuthProvider, ProtectedRoute } from "./context";

function MainRoutes() {
  return (
    <AuthProvider>
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/main" element={<ProtectedRoute><Main /></ProtectedRoute>} />
    </Routes>
    </AuthProvider>
  );
}


export default MainRoutes;
