import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'
import ItemCount from './itemCount'
import {CartContext} from '../../contexts/cartContext';


export default function Item(props) {
    return (
        <>
            <div className="card col-3">
                <a href={`#${props.Id}`}><img src={require(`../../img/${props.Img}`)} className="card-img-top" alt="..." /></a>
                <div className="card-body text-center m-2">
                    <h5 className="card-title">{props.Nombre}</h5>
                    <p className="card-text text-ellipsis">{props.Descripcion}</p>
                    <label className="disabled">{props.Stock} disponibles</label>
                    <div className="d-flex mt-2 justify-content-end">
                        <button type="button" className="btn btn-outline-primary"><Link to={`/item/${props.Id}`}>Ver</Link></button>
                    </div>
                </div>
            </div>
        </>
    )
}
