"use client";
import { useClient } from "src/app/_utils";
import { useRouteStyles } from "./_theme";
import ProductCardList from "./_features/product/list/components/ProductCardList";
import TopSlider from "src/app/_components/slider/TopSlider";
import { Product } from "./_features/product/detail/endpoint";

type TopPageProps = {
  productList: Product[];
};

const TopPage: React.FC<TopPageProps> = ({ productList }) => {
  useRouteStyles();
  const isClient = useClient();
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
