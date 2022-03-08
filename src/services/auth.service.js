import axios from "axios";
//development
// const API_URL = "http://localhost:8080/api/auth/";
//production
const API_URL = "https://accounter-task.herokuapp.com/api/auth/";

const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

const authServicesObject = {
  register,
  login,
  logout,
};
export default authServicesObject;
