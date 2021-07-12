import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes';
import { CartProvider } from './Context/cartContext'

ReactDOM.render(
  <React.StrictMode>
    <CartProvider>
      <Routes />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


export default ReactDOM