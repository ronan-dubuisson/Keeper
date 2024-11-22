import { createBrowserRouter } from "react-router-dom";
import Index from "./pages";
import Login from "./pages/login";
import ProtectedRoute from "./components/ProtectedRoute";
import Error404 from "./pages/error-pages/404";
import { NoteContextProvider } from "./contexts/NoteProvider";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <NoteContextProvider>
          <Index />
        </NoteContextProvider>
      </ProtectedRoute>
    ),
  },
  { path: "/login", element: <Login /> },
  { path: "*", element: <Error404 /> },
]);
