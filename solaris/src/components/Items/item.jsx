import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'

export default function Item(props) {
    const [carrito, setCarrito] = useState(0);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
    return (
        <>
            <div className="card col-3">
                <a href={`#${props.Id}`}><img src={require(`../../img/${props.Img}`)} className="card-img-top" alt="..." /></a>
                <div className="card-body text-center m-2">
                    <h5 className="card-title">{props.Nombre}</h5>
                    <p className="card-text text-ellipsis">{props.Descripcion}</p>
                    <label className="disabled">{props.Stock} disponibles</label>
                    <div className="d-flex justify-content-between">
                        <p>{props.Precio}</p>
                        <div className="btn-group" role="group">
                            <button type="button" className="btn btn-outline-primary" onClick={() => substract_item(props.Stock)}>-</button>
                            <label className="btn">{carrito}</label>
                            <button type="button" className="btn btn-outline-primary" onClick={() => add_item(props.Stock)}>+</button>
                        </div>
                    </div>
                    <div className="d-flex mt-2 justify-content-between">
                        <button type="button" className="btn btn-outline-primary"><Link to={`/item/${props.Id}`}>Ver</Link></button>
                        <button type="button" className="btn btn-outline-primary">Agregar al carrito</button>
                    </div>
                </div>
            </div>
            {/* <Modal show={show} onHide={handleClose} className=" modal-xl p-0">
                <ItemDetail className="mt-0" id={props.Id}/>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                </Modal.Footer>
            </Modal> */}
        </>
    )
}
