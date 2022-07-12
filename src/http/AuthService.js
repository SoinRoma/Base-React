import {$host} from './index';
import axios from "axios";

// Функция для логина получение токенов по логину и паролю.
export const login = async (username, password) => {
    try {
        const {data} = await $host.post('api/v1/token/', {username, password});
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('access_token', data.access);
    } catch (e) {
        alert(`Неправильный логин или пароль. Код ошибки: ${e.response.status}`);
    }
}

// Функция для выхода. Удаляем токены.
export const logout = () => {
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('access_token');
}

// Функция для проверки(валидности) токена
export const checkAuth = async () => {
    try{
        let refresh = localStorage.getItem('refresh_token');
        const {data} = await axios.post(`${process.env.REACT_APP_API_URL}api/v1/token/refresh/`, {refresh});
        localStorage.setItem('access_token', data.access);
    } catch (e) {
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
    }
}


