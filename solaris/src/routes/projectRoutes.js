import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 
import Home from '../components/home';
import ItemDetails from '../components/Items/itemDetails';
import ItemsCategories from '../components/Items/itemsCategories';

export default function ProjectRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/item/:id" element={<ItemDetails/>}/>
            <Route exact path="/categories/:id" element={<ItemsCategories/>}/>
        </Routes>

    </BrowserRouter>
  )
}
