import React from 'react';
import { useState, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


export default function ItemDetail(props) {
  const [product, setProduct] = useState({});
  const [img, setImg] = useState('descarga.png');
  const stars = [];
  const products_json = new Promise((resolve, reject) => {
    setTimeout(() => {
      const jsonData = require('../../data/productos.json');
      jsonData.forEach((data)=>{
        if(data.Id == props.id){
          resolve(data);
        }
      })
    }, 1000)
    
  })
  useEffect(() => {
    products_json.then(data => {
      setProduct(data);
      setImg(data.Img);
    })
  }, [])
  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title id="example-custom-modal-styling-title">{product.Nombre}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
          <div className="card mt-0">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane active" id="pic-1"><img src={require(`../../img/${img}`)} /></div>
                    <div className="tab-pane" id="pic-2"><img src={require(`../../img/${img}`)} /></div>
                    <div className="tab-pane" id="pic-3"><img src={require(`../../img/${img}`)} /></div>
                    <div className="tab-pane" id="pic-4"><img src={require(`../../img/${img}`)} /></div>
                    <div className="tab-pane" id="pic-5"><img src={require(`../../img/${img}`)} /></div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src={require(`../../img/${img}`)} /></a></li>
                    <li><a data-target="#pic-2" data-toggle="tab"><img src={require(`../../img/${img}`)} /></a></li>
                    <li><a data-target="#pic-3" data-toggle="tab"><img src={require(`../../img/${img}`)} /></a></li>
                    <li><a data-target="#pic-4" data-toggle="tab"><img src={require(`../../img/${img}`)} /></a></li>
                    <li><a data-target="#pic-5" data-toggle="tab"><img src={require(`../../img/${img}`)} /></a></li>
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
                  <h5 className="colors">colors:
                    <span className="color green not-available" data-toggle="tooltip" title="No disponible"></span>
                  </h5>
                  <h6 className="stock">Stock: {product.Stock}</h6>
                  <div className="action">
                    <button className="add-to-cart btn btn-default" type="button">Agregar al Carrito</button>
                    <button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Modal.Body>

    </>
  )
}