import {$api} from './index';

// Функция для логина получение токенов по логину и паролю.
export const login = async (username, password) => {
    try {
        const {data} = await $api.post('api/v1/token/', {username, password});
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
        const {data} = await $api.post('api/v1/token/refresh/', {refresh});
        localStorage.setItem('access_token', data.access);
        return data;
    } catch (e) {
        logout();
        return e;
    }
}


