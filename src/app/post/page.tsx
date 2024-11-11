"use client";
import { useClient } from "src/app/_utils";
import ProductUploadForm from "src/app/_features/product/form/components/ProductUploadForm";
import { useRouteStyles } from "src/app/_theme";

const Page: React.FC = () => {
  useRouteStyles();
  const isClient = useClient();
  return isClient && <ProductUploadForm />;
};

export default Page;
