import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import PrimeReact from 'primereact/api';
import { locale } from 'primereact/api';

PrimeReact.ripple = true;
locale('es');


ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
  document.getElementById('App')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
