"use client";
import ProductDetail from "app/_features/product/detail/components/ProductDetail";
import { useProduct } from "app/_features/product/detail/hooks";
import { useDetailStyles } from "app/_theme";
import { useParams } from "next/navigation";

const ProductDetailPage = () => {
  useDetailStyles();
  const { productCUID } = useParams<{ productCUID: string }>();

  const { data: product, isLoading } = useProduct(productCUID);
  if (!product) return null;
  if (isLoading) return <div>Loading...</div>;

  return (
    <ProductDetail
      title={product.title}
      description={product.description}
      image={product.image}
      subtitle={product.subtitle}
      skills={product.skills}
      developer={product.developer}
      developType={product.developType}
      productURL={product.productURL}
    />
  );
};

export default ProductDetailPage;
