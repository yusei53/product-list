export const dynamic = "force-dynamic";
import getProductList from "./_actions/get-product-list";
import TopPage from "./page.client";

const page = async () => {
  const productList = await getProductList();
  if (!productList) return undefined;

  return <TopPage productList={productList} />;
};

export default page;

/*

ほんとは以下のコードを書きたい(tanstack-react-queryでキャッシュ管理したいから)

  const { data: productList, isLoading } = useProductList();
  if (!productList) return undefined;
  if (isLoading) return <p>Loading...</p>

  return <TopPage productList={productList} />;

*/
