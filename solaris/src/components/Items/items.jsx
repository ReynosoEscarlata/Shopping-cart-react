import React, { useEffect } from 'react'
import { useState } from 'react'
import Item from './item'



export default function Products() {
    const [products, setProducts] = useState([]);
    const products_json = new Promise((resolve,reject) => {
        setTimeout(() =>{
            const jsonData = require('../../data/productos.json');
            resolve(jsonData);
        },2000)
    })
    useEffect(() =>{
        products_json.then(data =>{
            setProducts(data);
        })
    },[])
  return (
    <>
    <div className="cards container mt-0">
        <div className="row">
            {products.map((product, index) =>{
                return (
                    <Item 
                        Id={product.Id}
                        Img={product.Img} 
                        Nombre={product.Nombre} 
                        Descripcion={product.Descripcion} 
                        Precio={product.Precio}
                        Stock = {product.Stock}
                        Accion={index}
                        key={index}
                    />
                )
                })
            }
        </div>
    </div>
    
    </>
  )
}
