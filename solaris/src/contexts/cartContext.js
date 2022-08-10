import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext({});

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [pay, setPay] = useState(0);
    const [x, setX] = useState([]);

    const addToCart = (item, quantity) => {
        let current_pay=0;
        let existence = isInCart(item.Id);
        if (existence === true) {
            cart.forEach((product, i) => {
                if (product.Id === item.Id) {
                    cart[i].quantity += quantity;
                    setCart(cart);
                }
            })
        } else {
            setCart([...cart, { ...item, quantity }])
        }
        current_pay = quantity * item.Precio;
        setPay(pay + current_pay);
    }

    const isInCart = (id) => {
        let bandera = false;
        cart.forEach(product => {
            if (id == product.Id) {
                bandera = true;
            }
        }
        );
        return bandera;
    }

    const cleanCart = () => {
        setCart([]);
    }

    const removeToCart = (item, quantity) => {
        let current_pay = 0;
        let old_pay = 0;
        cart.forEach((product, i) => {
            if (product.Id === item.Id) {
                old_pay = cart[i].quantity *  cart[i].Precio;
                if (quantity == 0) {
                    setPay(pay - old_pay);
                    cart.splice(i, 1);
                } else {
                    cart[i].quantity = quantity;
                }
            }
        })
        current_pay = quantity * item.Precio;
        setPay((pay-old_pay) + current_pay);
        setCart(cart);
        setX([]);
    }

    const payment = () => {
        let subtotal = 0;
        cart.map(product => {
            subtotal = (product.quantity * product.Precio) + subtotal;
        })
        setPay(subtotal);

    }

    return (
        <CartContext.Provider value={{ cart, pay, isInCart, cleanCart, addToCart, removeToCart, cantInCart: cart.length }}>
            {children}
        </CartContext.Provider>
    )


}

export default CartProvider