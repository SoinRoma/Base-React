import React, {useContext, useState} from 'react';
import {Context} from "../index";
import {HOME_ROUTE} from "../routes/consts";
import {useNavigate} from 'react-router-dom';
import {login} from "../http/AuthService";


const Login = () => {

    const {user} = useContext(Context);
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const login_btn = async (e) => {
        try {
            e.preventDefault();
            await login(username, password);
            user.setIsAuth(true);
            if (localStorage.getItem('access_token')){
                navigate(HOME_ROUTE);
            }
        } catch (e) {
            alert(e.response.data.message);
        }
    }

    return (
        <div className="col-4 m-auto mt-5 ">
            <div className="card card-container p-3">
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Логин</label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            value={username}
                            onChange={e => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4">
                        <label htmlFor="password">Пароль</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-4 text-center">
                        <button
                            className="btn btn-primary btn-block"
                            onClick={login_btn}
                        >
                            Войти
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
