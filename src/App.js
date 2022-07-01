import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "./index";

const App = observer (() => {

    const {auth} = useContext(Context);

    // Переключение между компонекнтами(показывать слайдер или ничего)
    if(auth._isLoading){
        return <div />;
    }

    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
