import {$host} from './index';


export const login = async (username, password) => {
    try {
        const {data} = await $host.post('api/v1/token/', {username, password});
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('access_token', data.access);
    } catch (e) {
        alert('Неправильные данные');
    }
}




