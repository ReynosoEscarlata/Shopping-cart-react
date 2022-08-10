import { React, useState, useEffect, useContext } from 'react';
import { Link, useParams } from "react-router-dom";
//CONTEXT
import { CartContext } from '../../contexts/cartContext';
import NavBar from '../navBar';
import ItemCart from './itemCart';
import '../../css/cart.css';

export default function Cart() {
  const cartContent = useContext(CartContext);
  const [total, setTotal] = useState(0);
  const remove = (item, quantity) => {
    cartContent.removeToCart(item, quantity);
  }
  const pay = () => {
    alert("Haz pagado");
    cartContent.cleanCart();
  }
  useEffect(() => {
    let subtotal = 0;
    cartContent.cart.map(product => {
      subtotal = (product.quantity * product.Precio) + subtotal;
    })
    setTotal(subtotal);

  }, [])
  return (
    <>
      <NavBar />
      {cartContent.cart.length == 0 ?
        <div className="container text-center mt-5">

          <h2>No hay productos en el carrito</h2>
          <Link to={`/`} className="btn btn-outline-primary text-decoration-none">Ir a comprar</Link>

        </div>
        :
        <div className="container row mx-4">
          <div className="products col-9">
            {cartContent.cart.map((product, index) => {
              return (
                <>
                  <ItemCart
                    Item={product}
                    key={index}
                    remove={remove} />
                </>
              )
            })
            }
          </div>
          <div className="carrito col-3 mt-5">
            <h4>A comprar:</h4>
            <ul className="list-group list-group-flush">
              {cartContent.cart.map((product, index) => {
                return (
                  <>
                    <li className="list-group-item">
                      <div className="row">
                        <div className="col-10">
                          <h6># {index + 1} {product.Nombre}</h6>
                          <p>Unidades a comprar: {product.quantity}</p>
                        </div>
                        <div className="col-2">
                          <p>{(product.quantity * product.Precio).toLocaleString('en-US')}</p>
                        </div>
                      </div>
                    </li>
                  </>
                )
              })}
              <li className="list-group-item">
                TOTAL = {cartContent.pay.toLocaleString('en-US')}
              </li>
            </ul>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-outline-primary" onClick={() => pay()}>Pagar</button>
            </div>
          </div>
        </div>

      }
    </>
  )
}
