import { getProductList } from "./_features/product/list/endpoint";
import TopPage from "./page.client";

const page = async () => {
  const productList = await getProductList();

  return <TopPage productList={productList} />;
};

export default page;
