import { BASE_URL, BOOTCAMPS_URL } from "../constant";
import httpRequest from "../services/http-request";

export const getBootCamps = async (params) => {
  const url =
    params.size !== 0
      ? `${BASE_URL}${BOOTCAMPS_URL}?_page=${params.page}&_limit=${params.limit}`
      : `${BASE_URL}${BOOTCAMPS_URL}?_page=1&_limit=${params.limit}`;
  const response = await httpRequest.get(url);
  const totalItems = response.headers.get("x-total-count");
  return {
    data: response.data,
    totalItems,
  };
};
