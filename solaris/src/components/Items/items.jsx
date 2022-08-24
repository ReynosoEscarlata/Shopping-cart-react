import React, { useEffect } from 'react'
import { useState } from 'react'
import { db } from '../../db/connection';
import { getDocs, collection } from 'firebase/firestore';
import Item from './item';

export default function Products() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const query = collection(db, "items");
        getDocs(query).then((records) => {
            setProducts(records.docs.map((record) => ({ 'Id': record.id, ...record.data() })));
        })
    }, [])
    return (
        <>
        <div className="ms-0">
            <div className="cards" >
                <div className="row">
                    {products.map((product, index) => {
                        return (
                            <Item
                                Id={product.Id}
                                Img={product.Img}
                                Nombre={product.Nombre}
                                Descripcion={product.Descripcion}
                                Popularity={product.Popularity}
                                Votes={product.Votes}
                                Precio={product.Precio}
                                Stock={product.Stock}
                                Accion={index}
                                key={index}
                            />
                        )
                    })
                    }
                </div>
            </div>
        </div>

        </>
    )
}
