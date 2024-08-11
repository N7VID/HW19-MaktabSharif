import axios from "axios";
import { BASE_URL } from "../constant";

const httpRequest = axios.create({
  url: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpRequest;
