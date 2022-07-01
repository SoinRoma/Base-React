import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './assets/css/bootstrap.min.css';

import UserStore from "./store/UserStore";
import ContactStore from "./store/ContactStore";

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Context.Provider value={{user: new UserStore(), contact: new ContactStore()}}>
        <App />
    </Context.Provider>
);

