import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

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
