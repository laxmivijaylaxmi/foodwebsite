import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StoreContentProvider from "./component/Context/StoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StoreContentProvider>
      <App />
    </StoreContentProvider>
  </StrictMode>
);
