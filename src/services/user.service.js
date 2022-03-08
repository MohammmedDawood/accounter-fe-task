import axios from "axios";
import authHeader from "./auth-header";

//development
// const API_URL = "http://localhost:8080/api/test/";
//production
const API_URL = "https://accounter-task.herokuapp.com/api/test/";

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
