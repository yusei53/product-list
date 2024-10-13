import { useQuery } from "@tanstack/react-query";
import { getProductList } from "./endpoint";

export const useProductList = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProductList,
  });
  return { data, isLoading };
};
