import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function TercAllProducts() {
  const getAllProducts = await productByCategory("terc");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
