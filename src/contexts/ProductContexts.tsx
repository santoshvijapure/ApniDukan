import React, { createContext, useContext, useState, useEffect } from "react";
import { API_URI } from "../Constants/common";

export type productType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

export enum SortOrder {
  Ascending = "ascending",
  Descending = "descending",
  Original = "original",
}

interface ProductContextType {
  data: productType[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
  searchProducts: (query: string) => void;
  sortByPrice: (order: SortOrder) => void;
  searchQuery: string;
    getProductById: (id: number) => productType | undefined;

}
interface ProviderType {
  children: React.ReactNode;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<ProviderType> = ({ children }) => {
  const [data, setData] = useState<productType[]>([]);
  const [filteredData, setFilteredData] = useState<productType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URI);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      setData(responseData);
      setFilteredData(responseData);
    } catch (error: any) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    console.log("data fetch complete!!!");
  }, []);

  const searchProducts = (query: string) => {
    setSearchQuery(query);
    const filteredProducts = data.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredData(filteredProducts);
  };

  const sortByPrice = (order: SortOrder) => {
    let sortedProducts: productType[] = [];

    if (order === SortOrder.Ascending) {
      sortedProducts = [...filteredData].sort((a, b) => a.price - b.price);
    } else if (order === SortOrder.Descending) {
      sortedProducts = [...filteredData].sort((a, b) => b.price - a.price);
    } else {
      sortedProducts = [...data];
    }

    setFilteredData(sortedProducts);
  };
  const getProductById = (id: number) => {
    return data.find(product => (product.id) === id);
  };
  return (
    <ProductContext.Provider
      value={{
        data: filteredData,
        isLoading,
        error,
        refetch: fetchData,
        searchProducts,
        sortByPrice,
        searchQuery,
        getProductById
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = (): ProductContextType => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useProduct must be used within a ProductProvider");
  }
  return context;
};

