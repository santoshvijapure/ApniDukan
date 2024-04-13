import React from "react";
import "./App.css";
import ProductCatalogGrid from "./components/ProductCatalogGrid";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/Error";
import ProductDetailPage from "./components/ProductDetailsPage";



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
  return (
    <React.Fragment>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
