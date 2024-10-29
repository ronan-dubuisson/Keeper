import { RouterProvider } from "react-router-dom";
import "@src/App.css";
import Footer from "@src/components/footer";
import Heading from "@src/components/heading";
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
