import axios from 'axios';


// Обычные запросы (без токена)
const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

// Запросы с токеном (получаем через интерцептор)
const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
})

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('access_token')}`;
    return config;
}

$authHost.interceptors.request.use(authInterceptor);


export  {$host, $authHost};