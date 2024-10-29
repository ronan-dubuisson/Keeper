import { RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Heading from "./components/Heading";
import { router } from "./router";
import { AuthProvider } from "./contexts/AuthProvider";

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
