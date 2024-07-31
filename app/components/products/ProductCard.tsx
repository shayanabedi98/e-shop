"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard = ({ data }: ProductCardProps) => {
  const router = useRouter();

  const productRating = () => {
    let average = 0;
    for (let i = 0; i < data.reviews.length; i++) {
      average += data.reviews[i].rating;
    }
    return average / data.reviews.length;
  };

  return (
    <div
      onClick={() => router.push(`/product/${data.id}`)}
      className="col-span-1 relative cursor-pointer border-[1.2px] border-slate-200 bg-slate-50 rounded-sm p-2 transition hover:scale-105 text-center text-sm"
    >
      <div className="flex flex-col items-center w-full gap-1">
        <div className="aspect-square overflow-hidden">
          <Image
            src={data.images[0].image}
            alt={data.name}
            width={200}
            height={200}
            className="h-48 w-48 object-contain"
          />
        </div>
        <div className="mt-4">{truncateText(data.name)}</div>
        <div>
          <Rating readOnly value={productRating()} />
        </div>
        <div>{data.reviews.length} reviews</div>
        <div className="font-semibold">{formatPrice(data.price)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
