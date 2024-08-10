"use client";
import CustomSwiper from "./CustomSwiper";
import { SwiperSlide } from "swiper/react";
import { Product } from "@/app/_types";
import Image from "next/image";

type TProps = {
  products: Product[];
};

const TopSlider: React.FC<TProps> = ({ products }) => {
  return (
    <CustomSwiper>
      {products.map((product) => (
        <SwiperSlide
          key={product.id}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={product.image}
            alt={`${product.name}の画像`}
            // styleで当ててるせいか、widthとheightの大きさが画質に影響を与える
            height="1000"
            width="1000"
            // https://github.com/vercel/next.js/discussions/48255
            priority
            style={{ width: "75%", height: "auto" }}
          />
        </SwiperSlide>
      ))}
    </CustomSwiper>
  );
};

export default TopSlider;
