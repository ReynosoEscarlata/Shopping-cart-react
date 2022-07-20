import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/index.css';

import NavBar from './components/navBar';
import Container from './components/container'
import Products from './components/Style-Components/products'
import Carousel from './components/Style-Components/carousel'
import reportWebVitals from './reportWebVitals';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
    <div className="carrusel">
      <Carousel/>
    </div>
    <div className="products mt-4">
      <Products/>
    </div>
  </React.StrictMode>
);

reportWebVitals();
