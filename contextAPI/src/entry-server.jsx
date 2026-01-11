import React from "react";
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router-dom/server';
import App from './App';
import {UserProvider} from './context/UserContext';

export async function render(url){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const user = await res.json();

    const appHtml = renderToString(
        <StaticRouter location ={url}>
            <UserProvider 
            initialData = {user}>
                <App />
            </UserProvider>
        </StaticRouter>
    );

    return {
        appHtml,
        initialData: user,
    }
}