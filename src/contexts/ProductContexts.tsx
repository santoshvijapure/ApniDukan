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

interface ProductContextType {
  data: productType[];
  isLoading: boolean;
  error: string | null;
  refetch: () => void;
}
interface ProviderType {
  children: React.ReactNode;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<ProviderType> = ({ children }) => {
  const [data, setData] = useState<productType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(API_URI);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const responseData = await response.json();
      setData(responseData);
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

  return (
    <ProductContext.Provider
      value={{
        data,
        isLoading,
        error,
        refetch: fetchData,
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