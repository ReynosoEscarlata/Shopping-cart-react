import {createContext,  useState, useEffect} from 'react';

export const CartContext = createContext({});

const CartProvider = ({children}) =>{
    const [cart, setCart] = useState([])

    const addToCart=(item,quantity)=>{
        
        let existence = isInCart(item.Id);
        if (existence === true){
            cart.forEach((product,i)=>{
                if (product.Id === item.Id){
                    cart[i].quantity += quantity;
                    setCart(cart);
                }
            })
        }else{
            setCart([...cart,{...item, quantity}])
        }
    }

    const isInCart = (id)=>{
        let bandera = false;
        cart.forEach(product => {
            if (id == product.Id){
                bandera=true;
            }
        }
        );
        return bandera;
    }

    const cleanCart = ()=>{
        setCart([]);
    }

    const removeToCart = (item, quantity)=>{
        cart.forEach((product,i)=>{
            if (product.Id === item.Id){
                cart[i].quantity -= quantity;
                setCart(cart);
            }
        })
    }

    return( 
    <CartContext.Provider value={{cart,isInCart,cleanCart,addToCart,removeToCart, cantInCart:cart.length}}>
        {children}
    </CartContext.Provider>
    )


}

export default CartProvider