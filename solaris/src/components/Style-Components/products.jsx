import React from 'react'
import Item from './item'


export default function Products() {
    const products = [
        {
            "Nombre":"Tennis Nike",
            "Precio":"$ 1500 Mx",
            "Descripcion":"Tennis Nike desportivos de color negro, edicion limitada",
            "stock":100,
            "img":"nike_negros.jpg"
        },
        {
            "Nombre":"Xbox Series S",
            "Precio":"$ 12,999 Mx",
            "Descripcion":"Consola de Microsoft Xobx Series S de 1 TBB",
            "stock":2,
            "img":"xbox2.jpg"
        },
        {
            "Nombre":"Funko Pop Iron Man",
            "Precio":"$ 400 Mx",
            "Descripcion":"Funko del personaje de Marvel Iron Man en la Pelicula Avengers",
            "stock":4,
            "img":"funko_rion.jpg"
        },
        {
            "Nombre":"Iphone 13",
            "Precio":"$ 29,999 Mx",
            "Descripcion":"Celular utlimo modelo de la Marca Apple Iphones 13",
            "stock":16,
            "img":"iphone.jpg"
        },
    ]
    
  return (
    <>
    <div className="cards container mt-0">
        <div className="row">
            {products.map((product, index) =>{
                return (
                    <Item 
                        Nombre={product.Nombre} 
                        Descripcion={product.Descripcion} 
                        img={product.img} 
                        Precio={product.Precio}
                        accion={index}
                        stock = {product.stock}
                    />
                )
                })
            }
        </div>
    </div>
    
    </>
  )
}
