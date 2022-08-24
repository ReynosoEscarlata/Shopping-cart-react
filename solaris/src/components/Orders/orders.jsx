import { React, useState, useEffect } from 'react';
import { db } from '../../db/connection';
import { getDocs, collection } from 'firebase/firestore';
import NavBar from '../navBar';

export default function Orders() {
  
  const [orders, setOrders] = useState([]);
    useEffect(() => {
        const query = collection(db, "orders");
        getDocs(query).then((records) => {
          let data = [];
          records.docs.map((record)=>{
            console.log(record.data().items)
            let data_items = record.data().items
            let products = []
            console.log(typeof(data_items))
            for(let item of data_items) {
              products.push(` * ${item.quantity}-${item.Nombre} `);
            }
            data.push({'Id': record.id, ...record.data(), products:products.toString()})
          });
          setOrders(data);
        })
    }, [])
  return (
    <>
      <NavBar />
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Numero de orden</th>
              <th scope="col">Compró</th>
              <th scope="col">Productos</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>

            {orders.map((order,index) => {
              return(
                <tr>
                  <th scope="row" key={order.index}>{index+1}</th>
                  <td>{order.Id}</td>
                  <td>{order.buyer.name}</td>
                  <td>{order.products}</td>
                  <td>${order.total.toLocaleString('en-US')} Mx</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}
