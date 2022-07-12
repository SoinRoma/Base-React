import axios from 'axios';
import {logout} from "./AuthService";

// Обычные запросы без токена
const $api = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});


// Запросы с токеном
const $api_token = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
}

// Интерцептор для запросов с токеном. Отправлять Bearer токен
$api_token.interceptors.request.use(authInterceptor);

// Для запросов с токеном отслеживать статус ошибки
$api_token.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    // Сохраняем предыдущий запрос
    const first_api_token_request = error.config;
    if ((error.response.status === 401 || error.response.status === 403) && error.config && !error.config._isRetry) {
        first_api_token_request._isRetry = true;
        try {
            let refresh = localStorage.getItem('refresh_token');
            const {data} = await $api.post('api/v1/token/refresh/', {refresh});
            localStorage.setItem('access_token', data.access);
            return $api_token.request(first_api_token_request);
        } catch (e) {
            console.log('ВЫ НЕ АВТОРИЗОВАНЫ!');
            logout();
        }
    }
    throw error;
})


export  {$api, $api_token};