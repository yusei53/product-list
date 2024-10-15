export const dynamic = "force-dynamic";

import Home from "./page.client";
import getProductList from "./_actions/get-product-list";

const page = async () => {
  const productList = await getProductList();
  if (!productList) return undefined;

  return <Home productList={productList} />;
};

export default page;
