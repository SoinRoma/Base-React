import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {checkAuth} from "./http/AuthService";

const App = observer (() => {

    const {auth} = useContext(Context);

    useEffect(() => {
        if(localStorage.getItem('refresh_token')){
            checkAuth().then(() => {
                auth.setIsAuth(true);
            });
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
