import { PropsWithChildren } from "react";
import { useAuth } from "@hooks/useAuth";
import { Navigate } from "react-router-dom";

type Props = PropsWithChildren;

function ProtectedRoute({ children }: Props) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
