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

export type ProductList = {
  productList: Product[];
};

export const getProductList = async () => {
  const response = await axios.request<ProductList>({
    method: "GET",
    url: "/api/product-list",
  });
  return response.data.productList;
};
