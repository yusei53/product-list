"use client";
import { useClient } from "src/app/_utils";
import { useRouteStyles } from "./_theme";
import ProductCardList from "./_features/product/list/components/ProductCardList";
import { useProductList } from "./_features/product/list/hooks";
import TopSlider from "src/app/_components/slider/TopSlider";

const TopPage = () => {
  useRouteStyles();
  const isClient = useClient();
  const { data: productList } = useProductList();
  if (!productList) return null;
  return (
    isClient && (
      <>
        <TopSlider />
        <ProductCardList productList={productList} />
      </>
    )
  );
};

export default TopPage;
