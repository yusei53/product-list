import { getProductList } from "./_features/product/list/endpoint";
import TopPage from "./page.client";

const page = async () => {
  // TODO: ほんとはres.productList
  const res = await getProductList();

  return <TopPage productList={res.productList} />;
};

export default page;
