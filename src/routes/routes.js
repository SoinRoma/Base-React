import Home from "../pages/Home";
import Login from "../pages/Login";
import {AUTH_ROUTE, HOME_ROUTE} from "./consts";

// Защищённые ссылки, которые доступны не всем (токен нужен)
export const authRoutes = [
    {
        path: HOME_ROUTE,
        Component: Home
    }
];

// Публичные ссылки, которые доступны всем (токен не нужен)
export const publicRoutes = [
    {
        path: AUTH_ROUTE,
        Component: Login
    }
];