import { RouterProvider } from "react-router-dom";
import Footer from "@components/footer";
import Heading from "@components/heading";
import { router } from "@src/router";
import { AuthProvider } from "@src/contexts/authProvider";

function App() {
  return (
    <>
      <AuthProvider>
        <Heading />
        <RouterProvider router={router} />
        <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
