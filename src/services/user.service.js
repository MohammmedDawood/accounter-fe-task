import axios from "axios";
import authHeader from "./auth-header";
import { API_LINK } from "../helpers/url";

const API_URL = API_LINK + "api/test/";

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getSearchResult = (keyword) => {
  return axios.get(API_URL + "search", {
    headers: authHeader(),
    params: { keyword },
  });
};
const userServicesObject = {
  getUserBoard,
  getSearchResult,
};
export default userServicesObject;
