import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProductProvider } from "./contexts/ProductContexts.tsx";
import "twin.macro";
import GlobalStyles from "./styles/GlobalStyles.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.Fragment>
      <ProductProvider>
        <GlobalStyles />
        <App />
      </ProductProvider>
  </React.Fragment>
);
