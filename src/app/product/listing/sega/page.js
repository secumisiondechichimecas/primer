import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function SegaAllProducts() {
  const getAllProducts = await productByCategory("sega");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
