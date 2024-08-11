import CustomSwiper from "./CustomSwiper";
import { SwiperSlide } from "swiper/react";
import { Product } from "@types";
import Image from "next/image";
import { createUseStyles } from "react-jss";

type TProps = {
  products: Product[];
};

const useStyles = createUseStyles({
  container: {
    marginBlock: "32px",
  },
  imageField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "75%",
    height: "auto",
  },
});

const TopSlider: React.FC<TProps> = ({ products }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CustomSwiper>
        {products.map((product) => (
          <SwiperSlide key={product.id} className={classes.imageField}>
            <Image
              src={product.image}
              alt={`${product.name}の画像`}
              // styleで当ててるせいか、widthとheightの大きさが画質に影響を与える
              height="1000"
              width="1000"
              // https://github.com/vercel/next.js/discussions/48255
              priority
              className={classes.image}
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};

export default TopSlider;
