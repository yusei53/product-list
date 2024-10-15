import { useQuery } from "@tanstack/react-query";
import { getProductList } from "./endpoint";
import { productsKeys } from "app/_utils";

// 認証なしだとGETAPIは動作しないため、actionsを使ってGETしている
// そのため、この関数は使っていない
export const useProductList = () => {
  const { data, isLoading } = useQuery({
    queryKey: productsKeys.all,
    queryFn: getProductList,
  });
  return { data, isLoading };
};
