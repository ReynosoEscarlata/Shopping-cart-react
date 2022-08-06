import React from 'react'
import { useState } from 'react'


export default function Cart(props) {
  return (
    
    <div>
        <h2 className="d-inline">{props.cant}</h2>
        <a href="#" className="text-decoration-none">
          <i className="fas fa-shopping-cart icon-black fa-2x"></i>
        </a>
    </div>
  )
}
