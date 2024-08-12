import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../../components/Card/Card";
import { useGetBootCamps } from "../../hooks/useGetBootCamps";
import { useSearchParams } from "react-router-dom";
export default function BootCampsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams);

  const { data, isError, Error, isLoading } = useGetBootCamps(searchParams);

  return (
    <div className="flex justify-center items-center min-h-screen px-[230px] bg-mainBg">
      {isLoading ? (
        <p>LOADING</p>
      ) : (
        <div className="flex justify-center items-center flex-wrap pt-[150px] gap-x-4">
          {data?.map((item) => (
            <Card data={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
}
