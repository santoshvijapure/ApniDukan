import React, { useState } from "react";
import tw, { styled } from "twin.macro";
import { SortOrder, useProduct } from "../contexts/ProductContexts";

const ActionRowContainer = styled.div`
  ${tw`flex flex-col md:flex-row justify-center items-center mt-4 p-4 gap-8 mx-auto`}
  max-width: 1200px;
  
`;

const SearchInput = styled.input`
  ${tw` w-full md:w-auto border border-gray-300 rounded px-4 py-2 mb-2 md:mb-0 md:mr-4`}
`;

const SortButtonContainer = styled.div`
  ${tw`flex flex-col md:flex-row justify-start items-center gap-4 w-full md:w-auto`}
`;

const SortButton = styled.button<{ isSelected: boolean }>`
  ${tw`border border-gray-300 rounded px-4 py-2 w-full md:w-auto `}
  ${({ isSelected }) => isSelected && tw`bg-blue-500 text-white`}
`;

const ProductsTitles = styled.div`
  ${tw`flex flex-col md:flex-row justify-start items-center gap-4 flex-grow cursor-pointer font-semibold`}
  `

const ActionRow: React.FC = () => {
  const { searchProducts, sortByPrice } = useProduct();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<SortOrder | null>(null);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    searchProducts(query);
  };


  const handleSort = (order: SortOrder) => {
    if (order === sortOrder) {
      setSortOrder(null); // Deselect if already selected
      sortByPrice(SortOrder.Original); // Reset sorting
    } else {
      setSortOrder(order);
      sortByPrice(order);
    }
  };

  return (
    <ActionRowContainer>
      <ProductsTitles>Products \</ProductsTitles>

      <SortButtonContainer>
        <p>sort by price: </p>
        <SortButton
          isSelected={sortOrder === SortOrder.Ascending}
          onClick={() => handleSort(SortOrder.Ascending)}
        >
          Low to High
        </SortButton>
        <SortButton
          isSelected={sortOrder === SortOrder.Descending}
          onClick={() => handleSort(SortOrder.Descending)}
        >
          High to Low
        </SortButton>
        <SearchInput
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </SortButtonContainer>
    </ActionRowContainer>
  );
};

export default ActionRow;
