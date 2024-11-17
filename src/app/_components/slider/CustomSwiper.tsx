import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
type TProps = {
  children: React.ReactNode;
};

const CustomSwiper: React.FC<TProps> = ({ children }) => {
  return (
    <Swiper
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={false}
      modules={[Autoplay, Pagination, Navigation]}
      breakpoints={{
        0: {
          slidesPerView: 1.25,
        },
        900: {
          slidesPerView: 1.5,
          spaceBetween: -420,
        },
      }}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
