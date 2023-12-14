import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function SegcAllProducts() {
  const getAllProducts = await productByCategory("segc");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
