"use client";

import Avatar from "@/app/components/Avatar";
import Heading from "@/app/components/Heading";
import { Rating } from "@mui/material";
import moment from "moment";

interface ListRatingProps {
  product: any;
}

const ListRating = ({ product }: ListRatingProps) => {
  return (
    <div>
      <Heading title="Product Review" />
      <div className="text-sm mt-2">
        {product.reviews &&
          product.reviews.map((review: any) => (
            <div className="max-w-[300px]" key={review.id}>
              <div className="flex gap-2 items-center">
                <Avatar src={review.user.image} />
                <div className="font-semibold">{review?.user.name}</div>
                <div className="font-light">
                  {moment(review.createdDate).fromNow()}
                </div>
              </div>
              <div className="mt-2">
                <Rating readOnly value={review.rating} />
                <div className="ml-2">{review.comment}</div>
                <hr className="my-4" />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListRating;
