import { getProductList } from "./_features/product/list/endpoint";
import TopPage from "./page.client";

const page = async () => {
  // TODO: ほんとはres.productList
  const res = await getProductList();

  console.log(res.productList);

  return <TopPage productList={res.productList} />;
};

export default page;
