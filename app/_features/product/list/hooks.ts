import { useQuery } from "@tanstack/react-query";
import { getProductList } from "./endpoint";
import { productsKeys } from "app/_utils";

export const useProductList = () => {
  const { data, isLoading } = useQuery({
    queryKey: productsKeys.all,
    queryFn: getProductList,
  });
  return { data, isLoading };
};
