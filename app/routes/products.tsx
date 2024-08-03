import { MetaFunction } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [{ title: "Products" }];
};

export default function ProductsPage() {
  return (
    <div className="font-sans p-4">
      <h1 className="font-bold text-xl">Products</h1>
    </div>
  );
}
