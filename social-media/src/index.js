import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

const root = ReactDOM.createRoot(document.getElementById('root'));

makeServer();

root.render(
  <React.StrictMode>
    <Router>
    <Provider store={configureStore}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Provider>
    </Router>
  </React.StrictMode>
);
