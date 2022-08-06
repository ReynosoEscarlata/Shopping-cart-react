import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavBar from '../navBar';
import Item from './item'

export default function ItemsCategories() {
  const { id } = useParams();
  const [products, setProduct] = useState([]);
  const stars = [];
  const products_json = new Promise((resolve, reject) => {
    setTimeout(() => {
      const jsonData = require('../../data/productos.json');
      const arrayProducts = [];
      jsonData.forEach((data) => {
        if (data.Category == id) {
          arrayProducts.push(data);
        }
      })
      resolve(arrayProducts);
    }, 1000)
  })
  useEffect(() => {
    products_json.then(data => {
      setProduct(data);
    })
  }, [])
  return (
    <>
      <NavBar />
      <div className="cards container mt-0">
        <div className="row">
        {products.map((product, index) => {
          return (
            <Item
              Id={product.Id}
              Img={product.Img}
              Nombre={product.Nombre}
              Descripcion={product.Descripcion}
              Precio={product.Precio}
              Stock={product.Stock}
              Accion={index}
              key={index}
            />
          )
        })}
      </div>
    </div>
  </>
  )
}
