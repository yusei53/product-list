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
    height: "500px",
  },
  image: {
    width: "70%",
    height: "auto",
    objectFit: "cover",
    // margin: "0 16px",
    // "@media (max-width: 600px)": {
    //   width: "90%",
    // },
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
              layout="fill"
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
