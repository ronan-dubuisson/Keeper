import { PropsWithChildren } from "react";
import { useAuth } from "@hooks/useAuth";
import { Navigate } from "react-router-dom";

type Props = PropsWithChildren;

/**
 * protected routes to use as wrapper for any route that needs to be protected by authentication
 * @param children - automatically filled when wrapping a route component
 * @returns the child element when user is authenticated.
 */
function ProtectedRoute({ children }: Props) {
  const { user } = useAuth();

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
