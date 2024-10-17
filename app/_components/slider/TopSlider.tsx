import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { createUseStyles } from "react-jss";
import CustomSwiper from "./CustomSwiper";
import { Product } from "app/_features/product/detail/endpoint";
import { sliderImages } from "app/_mock/data";

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
    width: "70%",
    height: "auto",
    "@media (max-width: 600px)": {
      width: "90%",
    },
  },
});

const TopSlider = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <CustomSwiper>
        {sliderImages.map((sliderImage) => (
          <SwiperSlide key={sliderImage.id} className={classes.imageField}>
            <Image
              src={sliderImage.image}
              alt={`スライダー画像`}
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
