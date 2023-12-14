import CommonListing from "@/components/CommonListing";
import { getAllDocenProducts } from "@/services/product";

export default async function AllProducts() {
  const getAllProducts = await getAllDocenProducts();

  return <CommonListing data={getAllProducts && getAllProducts.data} />;
}
