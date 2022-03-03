import axios from "axios";
const API_URL = "https://testtwilio.uzdevelop.ru/api/v1/token/";

class AuthService {
  login(username, password) {
    return axios.post(API_URL, {username, password})
      .then(response => {
          localStorage.setItem("accessToken", response.data.access);
          localStorage.setItem("refreshToken", response.data.refresh);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }
}

export default new AuthService();
