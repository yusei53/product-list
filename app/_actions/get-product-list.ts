import { prisma } from "app/_lib/prisma";
const getProductList = async () => {
  try {
    const productList = await prisma.product.findMany();
    return productList;
  } catch (error) {
    console.error(error);
  }
};

export default getProductList;
