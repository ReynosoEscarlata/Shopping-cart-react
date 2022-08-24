import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavBar from '../navBar';
import ItemCount from './itemCount'
import { db } from '../../db/connection';
import {doc, getDoc } from 'firebase/firestore';
export default function ItemDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [count, setCount] = useState(0)
    const [img, setImg] = useState('https://firebasestorage.googleapis.com/v0/b/solaris-ac85d.appspot.com/o/descarga.png?alt=media&token=fa6bb019-48e0-42ea-8d98-88033cb7dfa9');
    const stars = [];
    useEffect(() => {
        const query = doc(db, "items", id);
        getDoc(query).then((record) => {
            setProduct({ 'Id': record.id, ...record.data() });
            setImg(record.data().Img);
        })
    }, [])
    return (
        <>
            <NavBar />
            <div className="Container">
                <div className="card mt-0">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">
                                <div className="preview-pic tab-content">
                                    <div className="tab-pane active" id="pic-1"><img src={img} /></div>
                                    <div className="tab-pane" id="pic-2"><img src={img} /></div>
                                    <div className="tab-pane" id="pic-3"><img src={img} /></div>
                                    <div className="tab-pane" id="pic-4"><img src={img} /></div>
                                    <div className="tab-pane" id="pic-5"><img src={img} /></div>
                                </div>
                                <ul className="preview-thumbnail nav nav-tabs">
                                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={img} /></a></li>
                                    <li><a data-target="#pic-2" data-toggle="tab"><img src={img} /></a></li>
                                    <li><a data-target="#pic-3" data-toggle="tab"><img src={img} /></a></li>
                                    <li><a data-target="#pic-4" data-toggle="tab"><img src={img} /></a></li>
                                    <li><a data-target="#pic-5" data-toggle="tab"><img src={img} /></a></li>
                                </ul>

                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{product.Nombre}</h3>
                                <div className="rating">
                                    <div className="stars">
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star checked"></span>
                                        <span className="fa fa-star"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                    <span className="review-no">41 Vistas</span>
                                </div>
                                <p className="product-description">{product.Descripcion}</p>
                                <h4 className="price">Precio disponible: <span>{product.Precio}</span></h4>
                                <p className="vote"><strong>{product.Popularity}%</strong> de los compradores disfrutaron este producto! <strong>({product.Votes} votos)</strong></p>
                                <h6 className="stock">Stock: {product.Stock}</h6>
                                <div className="action">
                                    <ItemCount Stock={product.Stock} Item={product} Id={id} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
