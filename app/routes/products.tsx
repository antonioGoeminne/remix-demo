import { MetaFunction, useLoaderData } from "@remix-run/react";
import { getProducts } from "features/products/api/get-products";
import { ProductCard } from "features/products/components/ProductCard";
import { Product } from "features/products/types";
import { flatAttributes } from "lib/flatAttributes";

export const meta: MetaFunction = () => {
  return [{ title: "Products" }];
};

export async function loader() {
  const data = await getProducts();
  return {
    products: data.data.map((d: { id: string; attributes: object }) =>
      flatAttributes(d)
    ),
  };
}

export default function ProductsPage() {
  const { products } = useLoaderData<typeof loader>();

  return (
    <div className="font-sans p-4">
      <h1 className="font-bold text-xl">Products</h1>
      <div className="grid grid-rows-2 lg:grid-rows-1 grid-flow-col gap-4 mt-12">
        {products.map((product: Product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
}
