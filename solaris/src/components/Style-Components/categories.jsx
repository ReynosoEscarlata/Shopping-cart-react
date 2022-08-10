import React from 'react'
import { Link } from "react-router-dom";  
import '../../css/categories.css';

export default function Categories() {
    
    return (
        <div className="categories mx-2 p-1 h-50">
            <div className="row m-0 p-0">
                <div className="col-4 m-0 p-0 ">
                    <Link to={`/categories/1`} className="text-decoration-none">
                        <div className="card mt-0 align-items-center categorie">
                            <div className="card-body p-0 text-center">
                                <i className="fas fa-gamepad fa-3x"></i>
                                <h5 className="card-text">Juegos</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-4 m-0 p-0 ">
                    <Link to={`/categories/2`} className="text-decoration-none">
                        <div className="card mt-0 align-items-center categorie" >
                            <div className="card-body p-0 text-center">
                                <i className="fas fa-car fa-3x"></i>
                                <h5 className="card-text">Autos</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-4 m-0 p-0">
                    <Link to={`/categories/3`} className="text-decoration-none">
                        <div className="card mt-0 align-items-center categorie" >
                            <div className="card-body p-0 text-center">
                                <i className="fas fa-mobile-alt fa-3x"></i>
                                <h5 className="card-text">Celulares</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="row m-0 p-0">
                <div className="col-4 m-0 p-0">
                    <Link to={`/categories/4`} className="text-decoration-none">
                        <div className="card mt-0 align-items-center categorie" >
                            <div className="card-body p-0 text-center">
                                <i className="fas fa-tshirt fa-3x"></i>
                                <h5 className="card-text">Ropa</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-4 m-0 p-0">
                    <Link to={`/categories/5`} className="text-decoration-none">
                        <div className="card mt-0 align-items-center categorie" >
                            <div className="card-body p-0 text-center">
                                <i className="fas fa-shoe-prints fa-3x"></i>
                                <h5 className="card-text">Zapatos</h5>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="col-4 m-0 p-0">
                    <Link to={`/categories/6`} className="text-decoration-none">
                        <div className="card mt-0 align-items-center categorie" >
                            <div className="card-body p-0 text-center">
                                <i className="fas fa-laptop fa-3x"></i>
                                <h5 className="card-text">Laptops</h5>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>


    )
}
