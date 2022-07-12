import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {checkAuth, logout} from "./http/AuthService";

const App = observer (() => {

    const {auth, users} = useContext(Context);

    useEffect(() => {
        if(localStorage.getItem('refresh_token')){
            checkAuth();
            if (localStorage.getItem('access_token')){
                auth.setIsAuth(true);
            } else {
                auth.setIsAuth(false);
                users.setUsers([]);
                logout();
            }
        } else {
            auth.setIsAuth(false);
            users.setUsers([]);
            logout();
        }
        // eslint-disable-next-line
    }, [])

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
