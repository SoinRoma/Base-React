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
            users.setIsLoading(true);
            checkAuth().then((data) => {
                if (data.response) {
                    auth.setIsAuth(false);
                } else {
                    auth.setIsAuth(true);
                }
                users.setIsLoading(false);
            });
        } else {
            auth.setIsAuth(false);
            users.setUsers([]);
            logout();
        }
        // eslint-disable-next-line
    }, [])

    if(users._isLoading){
        return <div />
    }

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
