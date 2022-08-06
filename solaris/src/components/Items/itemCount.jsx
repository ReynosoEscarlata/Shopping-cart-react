import {React,  useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import {CartContext} from '../../contexts/cartContext';

export default function ItemCount(props) {
    const cartContent  = useContext(CartContext);
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
    const add_cart = (quantity) => {
        cartContent.addToCart(props.Item,quantity);
        nav('/cart');
    }
    return (
        <>
            <div className="d-flex justify-content-between">
                <p>{props.Precio}</p>
            </div>
            <div className="d-flex mt-2 justify-content-between">
                <div className="btn-group" role="group">
                    <button type="button" className="btn btn-outline-primary" onClick={() => substract_item(props.Stock)}>-</button>
                    <label className="btn">{carrito}</label>
                    <button type="button" className="btn btn-outline-primary" onClick={() => add_item(props.Stock)}>+</button>
                </div>
                <button type="button" className="btn btn-outline-primary" onClick={() => add_cart(carrito)}>Agregar al carrito</button>
            </div>
        </>
    )
}
