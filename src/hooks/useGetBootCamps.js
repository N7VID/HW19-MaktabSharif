import { useQuery } from "@tanstack/react-query";
import { getBootCamps } from "../api/getBootCamps.api";
import { useSearchParams } from "react-router-dom";

export const useGetBootCamps = () => {
  const [searchParams] = useSearchParams();
  const params = {
    page: searchParams.get("page"),
    limit: 3,
    search: searchParams.get("name_like"),
    sort: searchParams.get("_sort"),
    order: searchParams.get("_order"),
  };

  return useQuery({
    queryKey: ["BootCamps", params],
    queryFn: () => getBootCamps(params),
  });
};
