import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { setupWorker } from "msw";
import { handlers } from "./mocks/handlers.ts";

import { BrowserRouter } from "react-router-dom";

export const worker =
  process.env.NODE_ENV === "development" ? setupWorker(...handlers) : undefined;

if (process.env.NODE_ENV === "development") {
  worker?.start();
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
