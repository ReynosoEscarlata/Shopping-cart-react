import React from 'react'
import { Link } from "react-router-dom";
import '../../css/items.css';

export default function Item(props) {
    return (
        <>
        <div className="row ms-0">
            <div className="col-md-12 col-xl-10 w-100 ">
                <div className="card shadow-0 border rounded-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-md-12 col-lg-3 col-xl-3 mb-4
                                mb-lg-0">
                                <div className="bg-image hover-zoom ripple rounded
                                    ripple-surface">
                                    <img
                                        src={props.Img}
                                        className="w-100" />
                                    <a href="#!">
                                        <div className="hover-overlay">
                                            <div className="mask"></div>
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-6 col-xl-6">
                                <h5>{props.Nombre}</h5>
                                <div className="d-flex flex-row">
                                    <div className="text-danger mb-1 me-2">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                    </div>
                                    <span>{props.Votes}</span>
                                </div>
                                <div className="mt-1 mb-0 text-muted small">
                                    <span>Popularidad</span>
                                    <span className="text-primary"> • </span>
                                    <span>{props.Popularity}</span>
                                    <span className="text-primary"> • </span>
                                    <span>Best finish<br /></span>
                                </div>
                                <div className="mb-2 text-muted small">
                                    <span>STOCK {props.Stock}</span>
                                </div>
                                <p className="text-truncate mb-4 mb-md-0">
                                    {props.Descripcion}
                                </p>
                            </div>
                            <div className="col-md-6 col-lg-3 col-xl-3
                                border-sm-start-none border-start">
                                <div className="d-flex flex-row align-items-center
                                    mb-1">
                                    <h4 className="mb-1 me-1">${props.Precio.toLocaleString('en-US')}</h4>
                                    <span className="text-danger"><s>En oferta</s></span>
                                </div>
                                <h6 className="text-success">Envio Gratis</h6>
                                <div className="d-flex flex-column mt-4">
                                    <button className="btn btn-outline-primary
                                        btn-sm mt-2" type="button">
                                        <Link className="text-decoration-none link-color d-block"to={`/item/${props.Id}`}>Detalles</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}
