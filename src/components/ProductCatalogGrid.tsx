import React from "react";
import { useProduct } from "../contexts/ProductContexts";
import Loader from "./Loader";
import ProductCard from "./ProductCard";
import tw, { styled } from "twin.macro";
import ActionRow from "./ProductAction";

const BannerImage = styled.img`
  ${tw`w-full`}
  height: 25rem;
  object-fit: cover;
`;
const CardsContainer = styled.div`
  ${tw`p-4 md:p-32 `}
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* 1 column on mobile */
  }
`;
const ProductCatalogGrid = () => {
  const { data: products, isLoading } = useProduct();

  if (isLoading) {
    return <Loader />;
  }
  return (
    <React.Fragment>
      <BannerImage src="shop.jpg" />
      <ActionRow />
      <CardsContainer>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </CardsContainer>
    </React.Fragment>
  );
};

export default ProductCatalogGrid;
