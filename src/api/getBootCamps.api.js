import { BASE_URL, BOOTCAMPS_URL } from "../constant";
import httpRequest from "../services/http-request";

export const getBootCamps = async ({
  search,
  limit,
  page,
  order,
  sort,
  category,
}) => {
  let categoryParams = "";
  category.forEach((param) => {
    categoryParams += `&category_like=${param}`;
  });

  const url = `${BASE_URL}${BOOTCAMPS_URL}?name_like=${search || ""}&_sort=${
    sort || ""
  }&_order=${order || ""}&_page=${page || 1}&_limit=${limit}${categoryParams}`;

  const response = await httpRequest.get(url);
  const totalItems = response.headers.get("x-total-count");

  return {
    data: response.data,
    totalItems,
  };
};
