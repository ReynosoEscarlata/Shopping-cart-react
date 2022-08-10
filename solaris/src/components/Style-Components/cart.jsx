import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'


export default function Cart(props) {
  return (
    <Link to={`/cart`} className="text-decoration-none">
      <div>
        <h2 className="d-inline">{props.cant}</h2>
          <i className="fas fa-shopping-cart icon-black fa-2x"></i>
      </div>
    </Link>
  )
}
