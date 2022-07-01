import {$host} from './index';
import axios from "axios";


export const login = async (username, password) => {
    try {
        const {data} = await $host.post('api/v1/token/', {username, password});
        localStorage.setItem('refresh_token', data.refresh);
        localStorage.setItem('access_token', data.access);
    } catch (e) {
        alert(e);
    }
}

export const checkAuth = async () => {
    try{
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}api/v1/token/`);
        localStorage.setItem('token', data.token);
    } catch (e) {
        alert(e);
    }
}


