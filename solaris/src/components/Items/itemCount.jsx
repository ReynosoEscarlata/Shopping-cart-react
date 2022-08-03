import React from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react'

export default function ItemCount(props) {
    const nav = useNavigate()
    const [carrito, setCarrito] = useState(0);
    const add_item = (stock) => {
        if (carrito != stock) {
            setCarrito(carrito + 1);
        }
    }
    const substract_item = (stock) => {
        if (carrito != 0) {
            setCarrito(carrito - 1);
        }
    }
    const add_cart = () => {
        const message = `Agregaste ${carrito} producto`;
        //   Utilizo un condicional ternario (condicional) ? (true) : (false)
        carrito === 1 ? alert(message) : alert(`${message}s`);
        nav('/cart');
    }
    return (
        <>
            <div className="d-flex justify-content-between">
                <p>{props.Precio}</p>
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-primary" onClick={() => substract_item(props.Stock)}>-</button>
                    <label className="btn">{carrito}</label>
                    <button type="button" className="btn btn-outline-primary" onClick={() => add_item(props.Stock)}>+</button>
                </div>
            </div>
            <div className="d-flex mt-2 justify-content-between">
                <button type="button" className="btn btn-outline-primary" onClick={() => add_cart()}>Agregar al carrito</button>
            </div>
        </>
    )
}
