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

// export const dynamic = "force-dynamic";

// import getProductList from "./_actions/get-product-list";
// import TopPage from "./page.client";

// const page = async () => {
//   const productList = await getProductList();
//   if (!productList) return undefined;

//   return <TopPage productList={productList} />;
// };

// export default page;
