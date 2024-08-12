import { BASE_URL, BOOTCAMPS_URL } from "../constant";
import httpRequest from "../services/http-request";

export const getBootCamps = async (params) => {
  console.log(params);

  const url =
    params.size !== 0
      ? `${BASE_URL}${BOOTCAMPS_URL}?_page=${params?.page}&_limit=${params?.limit}`
      : `${BASE_URL}${BOOTCAMPS_URL}?_page=1&_limit=3`;
  const response = await httpRequest.get(url);
  return response.data;
};
