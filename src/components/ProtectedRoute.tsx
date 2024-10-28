import { PropsWithChildren, useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

type Props = PropsWithChildren;

function ProtectedRoute({ children }: Props) {
  const user = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user === null) {
      navigate("/login", { replace: true });
    }
  }, [user, navigate]);

  return children;
}

export default ProtectedRoute;
