import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavBar from '../navBar';
import Item from './item'
import { db } from '../../db/connection';
import { getFirestore, doc, getDocs, collection, onSnapshot, query, setProducts, snapshot, where } from 'firebase/firestore';

export default function ItemsCategories() {
  const { id } = useParams();
  const [products, setProducts] = useState([]);
  const stars = [];
  useEffect(() => {
    console.log(typeof(id));
    const query_products = query(collection(db,"items"), where("Category", "==", parseInt(id)));
    getDocs(query_products).then((records) => {
      console.log(records.docs);
      setProducts(records.docs.map((record) => ({ 'Id': record.id, ...record.data() })));
    })
  }, [])
  return (
    <>
      <NavBar />
      <div className="cards container mt-0">
        <div className="row">
          {products.map((product, index) => {
            return (
              <Item
                Id={product.Id}
                Img={product.Img}
                Nombre={product.Nombre}
                Descripcion={product.Descripcion}
                Precio={product.Precio}
                Stock={product.Stock}
                Accion={index}
                key={index}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}
