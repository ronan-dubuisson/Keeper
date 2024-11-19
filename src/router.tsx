import { createBrowserRouter } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Error404 from "./pages/error-pages/404";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Error404 /> },
]);
