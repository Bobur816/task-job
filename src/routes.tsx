import { Navigate, createBrowserRouter } from "react-router";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Companies from "./pages/Companies";
import PrivateRoute from "./components/PrivateRoute";

export const router = createBrowserRouter([
  { path: "/", element: <Navigate to="/signIn" replace /> },
  { path: "/signUp", element: <SignUp /> },
  { path: "/signIn", element: <SignIn /> },
  {
    path: "/companies",
    element: (
      <PrivateRoute>
        <Companies />
      </PrivateRoute>
    ),
  },

  //   { path: "/about", element: <AboutPage /> },
]);
