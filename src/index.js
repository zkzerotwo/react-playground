import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App'
// import App from './paltrows-power-toes/App';
import AppLang from './lang-context/AppLang'
import { BrowserRouter } from "react-router-dom";
// import App from './state/ShoppingListApp/App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(<BrowserRouter>
    <AppLang />
</BrowserRouter>, document.getElementById('root'));


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
