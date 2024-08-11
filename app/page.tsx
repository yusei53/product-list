"use client";
import TopSlider from "./_components/home/slider/TopSlider";
import { useClient } from "./_hooks/useClient";
import { products } from "./_mock";

const Home = () => {
  const isClient = useClient();
  return isClient && <TopSlider products={products} />;
};

export default Home;
