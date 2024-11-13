"use client";
import ProductDetail from "src/app/_features/product/detail/components/ProductDetail";
import { useDetailStyles } from "src/app/_theme";
import { Product } from "src/app/_features/product/detail/endpoint";

type ProductDetailPageProps = {
  product: Product;
};

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product }) => {
  useDetailStyles();

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
