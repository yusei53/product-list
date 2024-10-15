import axios from "axios";
import { Product } from "../detail/endpoint";

export type ProductList = {
  productList: Product[];
};

// 認証なしだとGETAPIは動作しないため、actionsを使ってGETしている
// そのため、この関数は使っていない
export const getProductList = async () => {
  const response = await axios.request<ProductList>({
    method: "GET",
    url: "/api/product-list",
  });
  return response.data.productList;
};
