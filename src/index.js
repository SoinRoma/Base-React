import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Подключение стилей и js
import './assets/css/bootstrap.min.css';

import UserStore from "./store/UserStore";
import ContactStore from "./store/ContactStore";

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{auth: new UserStore(), users: new ContactStore()}}>
        <App />
    </Context.Provider>
);

