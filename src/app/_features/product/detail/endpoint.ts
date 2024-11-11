import axios from "axios";

export type DevelopType = "individual" | "team";

export type Product = {
  productCUID: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  developer: string[];
  developType: DevelopType;
  productURL?: String;
  image: string;
};

export const getProduct = async (productCUID: string) => {
  const response = await axios.request<Product>({
    method: "GET",
    url: `/api/product/${productCUID}`,
  });
  return response.data;
};
