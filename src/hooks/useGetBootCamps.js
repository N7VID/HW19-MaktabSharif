import { useQuery } from "@tanstack/react-query";
import { useParams, useSearchParams } from "react-router-dom";
import { getBootCamps } from "../api/getBootCamps.api";

export const useGetBootCamps = () => {
  const [searchParams] = useSearchParams();
  const params = {
    page: searchParams.get("page"),
    limit: 3,
    search: searchParams.get("name_like"),
    sort: searchParams.get("_sort"),
    order: searchParams.get("_order"),
    category: searchParams.getAll("category"),
  };

  return useQuery({
    queryKey: ["BootCamps", params],
    queryFn: () => getBootCamps(params),
  });
};
