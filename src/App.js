import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {observer} from "mobx-react-lite";

const App = observer (() => {
    return (
        <BrowserRouter>
            <AppRouter/>
        </BrowserRouter>
    );
});

export default App;
