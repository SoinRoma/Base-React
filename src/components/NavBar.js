import React, {useContext} from 'react';
import {Context} from "../index";
import {NavLink} from "react-router-dom";
import {HOME_ROUTE} from "../routes/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {auth, users} = useContext(Context);

    const logout = () => {
        auth.setIsAuth(false);
        users.setUsers([]);
        localStorage.removeItem('refresh_token');
        localStorage.removeItem('access_token');
    }

    return (
        <div className="navbar-store">
            <div className="container d-flex justify-content-between mt-3 mb-3">
                <NavLink className="text-decoration-none text-black" to={HOME_ROUTE}>Главная</NavLink>
                <nav className="ml-auto">
                    <button
                        className="btn btn-dark"
                        onClick={() => logout()}
                    >
                        Выйти
                    </button>
                </nav>
            </div>
        </div>
    );
});

export default NavBar;