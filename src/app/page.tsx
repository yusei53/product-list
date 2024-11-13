import { getProductList } from "./_features/product/list/endpoint";
import TopPage from "./page.client";

const page = async () => {
  // TODO: ほんとはres.productListとか嫌いだけどめんどいから一旦これ
  const res = await getProductList();

  return <TopPage productList={res.productList} />;
};

export default page;
