import { useQuery } from "@tanstack/react-query";
import { getSingleBootCamp } from "../api/getSingleBootCamp";

export const useGetSingleBootCamp = (id) => {
  return useQuery({
    queryKey: ["bootCamp"],
    queryFn: () => getSingleBootCamp(id),
  });
};
