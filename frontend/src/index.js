import React from 'react';
import ReactDOM from 'react-dom/client';
//  import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducer from './reducer';
import {configureStore} from "@reduxjs/toolkit"
import { ToastContainer } from 'react-toastify';

const store = configureStore({
   reducer:rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <Provider store = {store}>
     <BrowserRouter> 
    <App />
    </BrowserRouter>
  </Provider>
  <ToastContainer />
  </React.StrictMode>
);



