"use client";
import TopSlider from "@components/home/slider/TopSlider";
import { useClient } from "@hooks";
import { products } from "@mock";
import { useGlobalStyles } from "./_theme/theme";
import ProductCardList from "@components/home/products/ProductCardList";

const Home = () => {
  useGlobalStyles();
  const isClient = useClient();

  // TODO: ここでproductをGETするAPIを叩く
  return (
    isClient && (
      <>
        <TopSlider products={products} />
        <ProductCardList products={products} />
      </>
    )
  );
};

export default Home;
