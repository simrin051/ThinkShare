import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { makeServer } from './server';
import { AppWrapper } from './AppWrapper';
import { tokenKey } from './utils/constants';
import { getCookie } from './utils/AuthCookies';
import axios from "axios";

axios.defaults.headers.common['authorization'] = getCookie(tokenKey);
const container = document.getElementById('root');
const root = createRoot(container);

//Call make server
makeServer();

root.render(
  <React.StrictMode>
    <ChakraProvider>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter> 
    </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
