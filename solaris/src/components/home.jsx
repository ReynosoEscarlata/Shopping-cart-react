import React from 'react'
import NavBar from './navBar';
import Products from './Items/items'
import Carousel from './Style-Components/carousel'
import Categories from './Style-Components/categories'


export default function Home() {
    return (
        <>
            <NavBar />
            <div className="car-cat">
                <Carousel />
                <Categories />
            </div>
            <hr />
            <div className="products mt-4">
                <Products />
            </div>
        </>
    )
}
