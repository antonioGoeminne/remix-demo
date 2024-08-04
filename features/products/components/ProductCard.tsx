import { clsx } from "clsx";
import { Product } from "../types";

interface ProductCardProps {
  data: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="shadow rounded-md  border border-gray-300 cursor-pointer hover:shadow-md transition-all ease-in-out">
      <p className="font-bold text-lg m-2">{data.name}</p>
      <div
        className={clsx(
          "px-2 py-1 text-sm max-w-[90px] rounded-full text-center m-2",
          {
            "bg-green-400 text-green-700": data.active,
          },
          {
            "bg-red-400 text-red-900": !data.active,
          }
        )}
      >
        {data.active ? "Active" : "Inactive"}
      </div>
    </div>
  );
};
