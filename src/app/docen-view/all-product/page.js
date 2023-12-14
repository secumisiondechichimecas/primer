import CommonListing from "@/components/CommonListing";
import { getAllDocenProducts } from "@/services/product";



export default async function DocenAllProducts() {

  const allDocenProducts = await getAllDocenProducts()

  return <CommonListing data={allDocenProducts && allDocenProducts.data}/>
}
