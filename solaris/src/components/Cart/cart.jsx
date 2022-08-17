import { React, useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../db/connection';
//CONTEXT
import { CartContext } from '../../contexts/cartContext';

import NavBar from '../navBar';
import ItemCart from './itemCart';
import UserInfo from './userInfo';
import '../../css/cart.css';

export default function Cart() {

  const cartContent = useContext(CartContext);
  const [total, setTotal] = useState(0);

  const remove = (item, quantity) => {
    cartContent.removeToCart(item, quantity);
  }

  const verify_user = (info)=>{
    if (info.name.value == "" || info.email.value == "" || info.phone.value==""){
      alert("Favor de llenar el formulario de datos");
      return false;
    }
    return true;
  }

  const pay = (e) => {
    e.preventDefault();
    let verify_info = verify_user(e.target);
    if (verify_info === true){
      let buyer = { name: e.target.name.value, phone: e.target.phone.value, email: e.target.email.value};
      const order = {
        buyer: buyer,
        items: cartContent.cart,
        total: total
      };
      const ordersColletion = collection(db, "orders");
      addDoc(ordersColletion, order).then(({ id }) => {
        alert("Compra realizada, tu id de compra es: " + id)
        cartContent.cleanCart();
      })
    }
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
            <form  onSubmit={pay}>
              <div className="user-info">
                <UserInfo />
              </div>
              <hr />
              <div className="payment-container">
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
                  <button type="submit" className="btn btn-outline-primary">Pagar</button>
                </div>
              </div>
            </form>
          </div>
        </div>

      }
    </>
  )
}
