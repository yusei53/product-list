import axios from "axios";
import { Product } from "../detail/endpoint";

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
