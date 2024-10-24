import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { createUseStyles } from "react-jss";
import CustomSwiper from "./CustomSwiper";
import { sliderImages } from "app/_mock/data";

const useStyles = createUseStyles({
  container: {
    marginBlock: "32px",
  },
  imageField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    objectFit: "cover",
    borderRadius: "4px",
    "@media (max-width: 1200px)": {
      width: 450,
      height: 260,
    },
    "@media (max-width: 600px)": {
      width: 280,
      height: 180,
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
              width={600}
              height={360}
              // https://github.com/vercel/next.js/discussions/48255
              className={classes.image}
            />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </div>
  );
};

export default TopSlider;
