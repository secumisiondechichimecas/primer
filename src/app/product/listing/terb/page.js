import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function TerbAllProducts() {
  const getAllProducts = await productByCategory("terb");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
