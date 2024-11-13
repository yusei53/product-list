import { Product } from "../detail/endpoint";

export type ProductList = {
  productList: Product[];
};

export const getProductList = async (): Promise<ProductList> => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product-list`);
  const data = await res.json();
  return data.productList;
};
