import React from "react";
import "./App.css";
import ProductCatalogGrid from "./components/ProductCatalogGrid";
import Navbar from "./components/Navbar";
import tw, { styled } from "twin.macro";
import Footer from "./components/Footer";
import ActionRow from "./components/ProductAction";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFoundPage from "./components/Error";

const BannerImage = styled.img`
  ${tw`w-full`}
  height: 25rem;
  object-fit: cover;
`;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <React.Fragment>
        <BannerImage src="shop.jpg" />
        <ActionRow />
        <ProductCatalogGrid />
      </React.Fragment>
    ),
    errorElement: <NotFoundPage />,
  },
  {
    path: "/error",
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
