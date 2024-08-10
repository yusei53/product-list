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
      slidesPerView={1.5}
      spaceBetween={-50}
      centeredSlides={true}
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
    >
      {children}
    </Swiper>
  );
};

export default CustomSwiper;
