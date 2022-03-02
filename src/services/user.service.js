import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://testtwilio.uzdevelop.ru/api/v1/twilio/contact/list/';

class UserService {
  getPublicContent() {
    return axios.get(API_URL, { headers: authHeader() });
  }

}

export default new UserService();
