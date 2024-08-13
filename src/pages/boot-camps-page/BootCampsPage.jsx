import Card from "../../components/Card/Card";
import Pagination from "../../components/Pagination/Pagination";
import { useGetBootCamps } from "../../hooks/useGetBootCamps";
import CardManagement from "../../components/Management/CardManagement";
import CardSkeleton from "../../skeletons/CardSkeleton";
export default function BootCampsPage() {
  const { data, isError, Error, isLoading } = useGetBootCamps();
  // const { itemsPerPage, totalItems } = paginationVariables;
  const itemsPerPage = 3;
  const totalItems = data?.totalItems;

  return (
    <div className="flex justify-around items-center bg-mainBg min-h-screen">
      <CardManagement />
      <div className="flex flex-col justify-center items-center gap-10">
        <div className="flex justify-center items-center pt-[100px] gap-4 min-w-[800px]">
          {isLoading
            ? Array.from(Array(3)).map((item) => <CardSkeleton key={item} />)
            : data?.data?.map((item) => <Card data={item} key={item.id} />)}
        </div>
        <Pagination totalItems={totalItems} itemsPerPage={itemsPerPage} />
      </div>
    </div>
  );
}
