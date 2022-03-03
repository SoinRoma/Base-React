import axios from 'axios';
const API_URL = 'https://testtwilio.uzdevelop.ru/api/v1/twilio/contact/list/';

class DataService {
    getContent() {
        let token = localStorage.getItem('accessToken');
        if (token) {
            return axios.get(API_URL, {headers: {Authorization: 'Bearer ' + token}});
        } else {
            return axios.get(API_URL, {headers: {Authorization: 'Bearer ' + token}});
        }

    }
}

export default new DataService();
