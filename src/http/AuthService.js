import {$host} from './index';
import axios from "axios";


export const login = async (username, password) => {
    try {
        const {data} = await $host.post('api/v1/token/', {username, password});
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('access_token', data.access);
    } catch (e) {
        alert(`Неправильный логин или пароль. Код ошибки: ${e.response.status}`);
    }
}

export const checkAuth = async () => {
    try{
        let refresh = localStorage.getItem('refresh_token');
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}api/v1/token/refresh/`, {refresh});
        localStorage.setItem('access_token', data.access);
    } catch (e) {
        alert(e);
    }
}


