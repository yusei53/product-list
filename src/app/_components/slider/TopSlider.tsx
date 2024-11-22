import { SwiperSlide } from "swiper/react";
import Image from "next/image";
import { createUseStyles } from "react-jss";
import CustomSwiper from "./CustomSwiper";

const useStyles = createUseStyles({
  container: {
    "@media (max-width: 1600px)": {
      marginBlock: "65px",
    },
    "@media (max-width: 600px)": {
      marginBlock: "40px",
    },
  },
  imageField: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  image: {
    objectFit: "cover",
    borderRadius: "10px",
    "@media (max-width: 1200px)": {
      width: 450,
      height: 260,
    },
    "@media (max-width: 600px)": {
      width: 320,
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

export const sliderImages = [
  {
    id: 1,
    image: "/image1.jpg",
  },
  {
    id: 2,
    image: "/image2.png",
  },
  {
    id: 3,
    image: "/image3.jpg",
  },
  {
    id: 4,
    image: "/image4.jpg",
  },
  {
    id: 5,
    image: "/image5.jpg",
  },
  {
    id: 6,
    image: "/image6.jpg",
  },
  {
    id: 7,
    image: "/image7.jpg",
  },
  {
    id: 8,
    image: "/image8.jpg",
  },
  {
    id: 9,
    image: "/image9.jpg",
  },
  {
    id: 10,
    image: "/image10.jpeg",
  },
  {
    id: 11,
    image: "/image11.jpg",
  },
  {
    id: 12,
    image: "/image12.jpg",
  },
];
