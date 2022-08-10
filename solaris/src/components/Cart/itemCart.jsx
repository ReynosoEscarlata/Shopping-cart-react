import {React,  useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from '../../contexts/cartContext';
export default function ItemCart(props) {
    const nav = useNavigate()
    const cartContent = useContext(CartContext);
    const [x,setX]=useState(cartContent);
    const [carrito, setCarrito] = useState(props.Item.quantity);
    //FUNCTIONS 
    const add_item = (quantity) => {
        if (carrito != quantity) {
            setCarrito(carrito + 1);
        }
    }
    const substract_item = (quantity) => {
        if (carrito != 0) {
            setCarrito(carrito - 1);
        }
    }

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={require(`../../img/${props.Item.Img}`)} className="img-fluid rounded-start card-image" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{props.Item.Nombre}</h5>
                        <p className="card-text">{props.Item.Descripcion}</p>
                        <p className="card-text"><small className="text-muted">Unidades a comprar {props.Item.quantity}</small></p>
                        <h4 className="price">Precio <span>{props.Item.Precio}</span></h4>
                        <div className="d-flex mt-2 justify-content-between">
                            <div className="btn-group" role="group">
                                <button type="button" className="btn btn-outline-primary" onClick={() => substract_item(props.Item.quantity)}>-</button>
                                <label className="btn">{carrito}</label>
                                <button type="button" className="btn btn-outline-primary" onClick={() => add_item(props.Item.quantity)}>+</button>
                            </div>
                            <button type="button" className="btn btn-outline-primary" onClick={() => props.remove(props.Item,carrito)}>Actualizar carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
