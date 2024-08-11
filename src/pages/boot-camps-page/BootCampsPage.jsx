import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
export default function BootCampsPage() {
  return (
    <div className="flex justify-center items-center min-h-screen px-40">
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        // autoplay
        spaceBetween={30}
        pagination={{ clickable: true }}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="py-20 px-4 bg-orange-400">1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-20 px-4 bg-orange-400">2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-20 px-4 bg-orange-400">3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="py-20 px-4 bg-orange-400">4</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
