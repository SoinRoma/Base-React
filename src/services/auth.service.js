import axios from "axios";
const API_URL = "https://testtwilio.uzdevelop.ru/api/v1/token/";

class AuthService {
  login(username, password) {
    return axios.post(API_URL, {username, password})
      .then(response => {
          console.log(response.data)
          localStorage.setItem("accessToken", response.data.access);
        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("accessToken");
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
  }
}

export default new AuthService();
