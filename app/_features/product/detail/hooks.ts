import { useQuery } from "@tanstack/react-query";
import { getProduct } from "./endpoint";
import { productsKeys } from "app/_utils";

export const useProduct = (productCUID: string) => {
  const { data, isLoading } = useQuery({
    queryKey: productsKeys.detail(productCUID),
    queryFn: () => getProduct(productCUID),
  });
  return { data, isLoading };
};
