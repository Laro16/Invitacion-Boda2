import React from "react";
import ReactDOM from "react-dom/client";
import { setup } from "twind";
import { twind, virtualSheet } from "twind/shim";
import App from "./App";

const sheet = virtualSheet();
setup({ sheet });
twind(sheet);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);