import { useProduct } from "../contexts/ProductContexts";
import ProductCard from "./ProductCard";
import tw, { styled } from "twin.macro";


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

  if(isLoading) {
    return <p>Loading...</p>
  }
  return (
    <CardsContainer>
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </CardsContainer>
  );
};

export default ProductCatalogGrid;
