import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { useGetBootCamps } from "../../hooks/useGetBootCamps";
export default function BootCampsPage() {
  const { data, isError, Error, isLoading } = useGetBootCamps();
  // const { itemsPerPage, totalItems } = paginationVariables;
  const itemsPerPage = 3;
  const totalItems = data?.totalItems;
  console.log(totalItems);

  return (
    <div className="flex flex-col justify-center items-center bg-mainBg min-h-screen gap-10">
      <div className="flex justify-center items-center px-[230px] ">
        {isLoading ? (
          <p>LOADING</p>
        ) : (
          <div className="flex justify-center items-center flex-wrap pt-[100px] gap-x-4">
            {data?.data?.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
      <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} />
    </div>
  );
}
