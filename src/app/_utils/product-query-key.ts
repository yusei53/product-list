export const productsKeys = {
  all: ["products"] as const,
  detail: (productCUID: string) =>
    [...productsKeys.all, "detail", productCUID] as const,
};
