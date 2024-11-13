export type DevelopType = "individual" | "team";

export type Product = {
  productCUID: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  developer: string[];
  developType: DevelopType;
  productURL?: String;
  image: string;
};

export const getProduct = async (productCUID: string): Promise<Product> => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/product/${productCUID}`
  );
  const data = await res.json();
  return data;
};
