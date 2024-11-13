import { getProduct } from "src/app/_features/product/detail/endpoint";
import ProductDetailPage from "./page.client";

const page = async ({ params }: { params: { productCUID: string } }) => {
  const product = await getProduct(params.productCUID);

  return <ProductDetailPage product={product} />;
};

export default page;
