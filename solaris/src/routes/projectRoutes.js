import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../components/home';
import ItemDetails from '../components/Items/itemDetails';
import ItemsCategories from '../components/Items/itemsCategories';
import Cart from '../components/Cart/cart';
import CartProvider from '../contexts/cartContext'

import NavBar from '../components/navBar';
export default function ProjectRoutes() {

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/item/:id" element={<ItemDetails />} />
          <Route exact path="/categories/:id" element={<ItemsCategories />} />
          <Route exact path="/cart/" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
