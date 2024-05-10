import React, { useEffect } from "react";
import "./App.css";
import ProductCatalogGrid from "./components/ProductCatalogGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/Error";
import ProductDetailPage from "./components/ProductDetailsPage";
import LegendaryCursor from "legendary-cursor";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <ProductCatalogGrid />
      </React.Fragment>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "product/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  useEffect(() => {
    window.addEventListener("load", () => {
      LegendaryCursor.init({
        lineSize: 0.015,
        opacityDecrement: 0.55,
        speedExpFactor: 0.8,
        lineExpFactor: 0.6,
        sparklesCount: 20,
        maxOpacity: 0.40, // should be a number between [0 ... 1]
      });
    });
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
