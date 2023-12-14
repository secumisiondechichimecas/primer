import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function SegbAllProducts() {
  const getAllProducts = await productByCategory("segb");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
