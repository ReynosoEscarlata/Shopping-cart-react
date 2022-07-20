import React from 'react'
import Cart from './cart'
import { useState } from 'react'

export default function Item(props) {
  const [carrito, setCarrito] = useState(0);
    const add_item = (stock)=>{
        if(carrito !=stock){
            setCarrito(carrito+1);
        }
    }
    const substract_item = (stock)=>{
        if(carrito != 0){
            setCarrito(carrito-1);
        }
    }
  return (
    <div className="card col-3">
        <img src={require(`../../img/${props.img}`)} className="card-img-top" alt="..."/>
        <div className="card-body text-center m-2">
            <h5 className="card-title">{props.Nombre}</h5>
            <p className="card-text">{props.Descripcion}</p>
            <label className="disabled">{props.stock} disponibles</label>
            <div className="d-flex justify-content-between">
                <p>{props.Precio}</p>
                <div className="btn-group" role="group">
                    <button type="button"className="btn btn-outline-primary" onClick={()=>substract_item(props.stock)}>-</button>
                    <label className="btn">{carrito}</label>
                    <button type="button"className="btn btn-outline-primary" onClick={()=>add_item(props.stock)}>+</button>
                </div>
            </div>
            <div className="mt-2" role="">
                    <button type="button"className="btn btn-outline-primary">Agregar al carrito</button>
                </div>
        </div>
    </div>
  )
}
