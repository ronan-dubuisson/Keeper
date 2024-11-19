import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@src/App";
import "virtual:uno.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
