import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from "react-router-dom";
import { makeServer } from "./server";
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));

makeServer();

root.render(
  <React.StrictMode>
    <Router>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </Router>
  </React.StrictMode>
);
