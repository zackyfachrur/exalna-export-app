// src/main.tsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { store } from "./store/index";

import "react-toastify/dist/ReactToastify.css";
import "remixicon/fonts/remixicon.css";
import "./css/global.css";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={`${import.meta.env.VITE_GOOGLE_CLIENT_ID}`}>
        <App />
        <ToastContainer />
      </GoogleOAuthProvider>
    </Provider>
  </StrictMode>
);
