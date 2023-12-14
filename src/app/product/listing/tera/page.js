import CommonListing from "@/components/CommonListing";
import { productByCategory } from "@/services/product";

export default async function TeraAllProducts() {
  const getAllProducts = await productByCategory("tera");

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
