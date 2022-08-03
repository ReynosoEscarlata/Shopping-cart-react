import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import NavBar from '../navBar';

export default function Cart() {
    const { id } = useParams();
  return (
    <>
    <NavBar />
    Cart
    </>
  )
}
