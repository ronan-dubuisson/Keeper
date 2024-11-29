import { RouterProvider } from "react-router-dom";
import { router } from "@src/router";
import { AuthProvider } from "@src/contexts/AuthProvider";
import { QueryClient, QueryClientProvider } from "react-query";
import { CookiesProvider } from "react-cookie";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </CookiesProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
