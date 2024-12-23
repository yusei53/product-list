import { supabase } from "src/app/_lib/supabase";
import { Product } from "../detail/endpoint";

export const postImage = async (file: File, fileName: string) => {
  const { error } = await supabase.storage
    .from("product-image-buckets")
    .upload(`thumbnail/${fileName}`, file);
  return error || null;
};

export const getImageUrl = async (fileName: string) => {
  const { data: urlData } = await supabase.storage
    .from("product-image-buckets")
    .getPublicUrl(`thumbnail/${fileName}`);
  return urlData.publicUrl;
};

export type PostProductRequest = Omit<Product, "productCUID">;

export const postProduct = async (body: PostProductRequest) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/product`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res.status === 201;
};
