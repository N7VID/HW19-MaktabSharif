import { BASE_URL, BOOTCAMPS_URL } from "../constant";
import httpRequest from "../services/http-request";

export const getBootCamps = async ({
  size,
  search,
  limit,
  page,
  order,
  sort,
}) => {
  const url = `${BASE_URL}${BOOTCAMPS_URL}?name_like=${
    search || ""
  }&_sort=${sort}&_order=${order}&_page=${page || 1}&_limit=${limit}`;

  const response = await httpRequest.get(url);
  const totalItems = response.headers.get("x-total-count");
  return {
    data: response.data,
    totalItems,
  };
};
