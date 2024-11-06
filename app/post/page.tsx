"use client";
import { useClient } from "@hooks";
import ProductUploadForm from "app/_features/product/form/components/ProductUploadForm";
import { useRouteStyles } from "app/_theme";

const Page: React.FC = () => {
  useRouteStyles();
  const isClient = useClient();
  return isClient && <ProductUploadForm />;
};

export default Page;
