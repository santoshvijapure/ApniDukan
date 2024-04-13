import React from "react";
import "./App.css";
import ProductCatalogGrid from "./components/ProductCatalogGrid";
import Navbar from "./components/Navbar";
import tw, { styled } from "twin.macro";
import Footer from "./components/Footer";

const BannerImage = styled.img`
  ${tw`w-full`}
  height: 25rem;
  object-fit: cover;
`;

function App() {
  return (
    <React.Fragment>

      <Navbar />
      <BannerImage src="shop.jpg"/>
      <ProductCatalogGrid />
      <Footer/>
    </React.Fragment>
  );
}

export default App;
