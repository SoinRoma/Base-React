import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../routes/consts";
import {observer} from "mobx-react-lite";
import {logout} from "../http/AuthService";
import "../assets/css/style.css";

const NavBar = observer(() => {
    const {auth, users} = useContext(Context);

    const logout_btn = () => {
        auth.setIsAuth(false);
        users.setUsers([]);
        logout();
    }

    return (
        <div className="navbar-store">
            <div className="container d-flex justify-content-between align-items-center py-2 mb-3">
                <NavLink className="text-decoration-none text-white" to={HOME_ROUTE}>Главная</NavLink>
                <nav className="ml-auto">
                    <button
                        className="btn btn-light"
                        onClick={() => logout_btn()}
                    >
                        Выйти
                    </button>
                </nav>
            </div>
        </div>
    );
});

export default NavBar;