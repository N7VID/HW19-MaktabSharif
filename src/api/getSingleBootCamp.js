import { BASE_URL, BOOTCAMPS_URL } from "../constant";
import httpRequest from "../services/http-request";

export const getSingleBootCamp = async (id) => {
  const url = `${BASE_URL}${BOOTCAMPS_URL}/${id}`;
  const response = await httpRequest.get(url);
  return response.data;
};
