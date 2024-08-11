import { BASE_URL, BOOTCAMPS_URL } from "../constant";
import httpRequest from "../services/http-request";

export const getBootCamps = async () => {
  const url = `${BASE_URL}${BOOTCAMPS_URL}`;
  const response = await httpRequest.get(url);
  return response.data;
};
