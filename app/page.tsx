"use client";

import TopSlider from "@components/home/slider/TopSlider";
import { useClient } from "@hooks";
import { products } from "@mock";

const Home = () => {
  const isClient = useClient();
  return isClient && <TopSlider products={products} />;
};

export default Home;
