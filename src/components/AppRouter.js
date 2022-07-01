import React, {useContext} from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes/routes";
import {AUTH_ROUTE, HOME_ROUTE} from "../routes/consts";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const AppRouter = observer (() => {
    const {user} = useContext(Context);
    // Если авторизован то по умолчанию выбирается главная страница иначе логин
    let route;
    let token = localStorage.getItem('access_token');
    if(token){
        user.setIsAuth(true);
    }

    if (user.isAuth){
        route = <Route path="*" element={<Navigate to={HOME_ROUTE} />}/>;
    } else {
        route = <Route path="*" element={<Navigate to={AUTH_ROUTE} />}/>;
    }

    return (
        <Routes>

            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}

            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}


            {/*Редирект на главную страницу, если ввели неправильный адрес*/}
            {route}
        </Routes>
    );
});

export default AppRouter;