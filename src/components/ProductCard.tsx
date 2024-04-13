import styled from "styled-components";
import { productType } from "../types/types";
import tw from "twin.macro";

const CardContainer = styled.div`
  ${tw`md:w-72  overflow-hidden transition-transform duration-300  hover:scale-105 p-4`}
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  align-self:center;
`;

const CardImage = styled.img`
${tw`w-full h-48 object-contain`}
`;

const CardContent = styled.div`
  padding: 1rem;
`;

const CardTitle = styled.h3`
  ${tw`text-lg font-bold mb-2 `}
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const CardPrice = styled.p`
  ${tw`text-base py-2`}
`;

const SeeMoreButton = styled.button`
  ${tw` hover:bg-gray-700 text-black hover:text-white px-4 py-2  transition-colors duration-300`}
`;

const ActionBar = styled.div`
  ${tw` flex justify-between items-center p-4`}

`;

type Component = {
  product: productType;
};
const ProductCard = ({ product }: Component) => {
  const { image, price, title } = product || {};
  return (
    <CardContainer>
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>

        <ActionBar>
          <CardPrice>${price}</CardPrice>
          <SeeMoreButton>See More</SeeMoreButton>
        </ActionBar>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;