import { useNavigate } from "react-router";
import { ReactNode, useEffect } from "react";
import { useUser } from "../authentication/useUser";

function PrivateRoute({ children }: { children: ReactNode }) {
  const { isLoading, isAuthenticated } = useUser();

  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/signIn");
    }
  }, [isAuthenticated, isLoading, navigate]);

  if (isAuthenticated) return children;
}

export default PrivateRoute;
