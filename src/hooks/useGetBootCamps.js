import { useQuery } from "@tanstack/react-query";
import { getBootCamps } from "../api/getBootCamps.api";

export const useGetBootCamps = (params) => {
  return useQuery({
    queryKey: ["BootCamps"],
    queryFn: () => getBootCamps(params),
  });
};
