"use client";
import { useClient } from "app/_utils";
import { useRouteStyles } from "./_theme";
import ProductCardList from "./_features/product/list/components/ProductCardList";
import { FC } from "react";
import { Product } from "./_features/product/detail/endpoint";

type TProps = {
  productList: Product[];
};

const TopPage: FC<TProps> = ({ productList }) => {
  useRouteStyles();
  const isClient = useClient();

  return (
    isClient && (
      <>
        {/* <TopSlider products={products} /> */}
        <ProductCardList productList={productList} />
      </>
    )
  );
};

export default TopPage;
