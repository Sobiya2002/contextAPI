import React from "react";
import { hydrateRoot } from "react-dom/client";
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import {UserProvider} from './context/UserContext';

hydrateRoot(
    document.getElementById('root'),
    <BrowserRouter>
    <UserProvider
    initialData = {window.__INITIAL_DATA__}>
        <App />
    </UserProvider>
    </BrowserRouter>
);