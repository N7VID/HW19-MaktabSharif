import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import { useGetBootCamps } from "../../hooks/useGetBootCamps";
import Card from "../../components/Card/Card";
export default function BootCampsPage() {
  const { data, isError, Error, isLoading } = useGetBootCamps();

  return (
    <div className="flex justify-center items-center min-h-screen px-[230px] bg-mainBg">
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        <Swiper
          modules={[Navigation, Pagination, A11y, Autoplay]}
          navigation
          autoplay
          loop
          spaceBetween={30}
          // pagination={{ clickable: true }}
          slidesPerView={4}
          // onSlideChange={() => console.log("slide change")}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {data?.map((item) => (
            <SwiperSlide key={item.id}>
              <Card data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
