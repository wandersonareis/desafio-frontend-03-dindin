import { Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Main from "./pages/Main";
import { ProtectedRoute } from "./context";
import { createRoutesFromElements } from "react-router-dom";
import { AuthLayout } from "./context/authLayout";
import { categoriesList } from "./services/getCategoriesList";
import { createHashRouter } from "react-router-dom";

export const router = createHashRouter(
  createRoutesFromElements(
    <Route element={<AuthLayout />}>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/main"
        loader={categoriesList}
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      />
    </Route>
  )
);
