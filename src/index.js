import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'



 import "../node_modules/bootstrap/dist/css/bootstrap.css"
 import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
  import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import StoreContextProvider from './context/StoreContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    
    <BrowserRouter>
    
       
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
    
    </BrowserRouter> 
);

