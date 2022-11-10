import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProviderData } from "./context_data";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProviderData>
    <App />
  </ProviderData>
);
