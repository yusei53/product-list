import axios from "axios";

export type Product = {
  productCUID: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  department: string;
  developer: string;
  image: string;
};

export const getProduct = async (productCUID: string) => {
  const response = await axios.request<Product>({
    method: "GET",
    url: `/api/product/${productCUID}`,
  });
  return response.data;
};
