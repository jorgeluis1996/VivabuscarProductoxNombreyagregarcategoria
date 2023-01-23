import React from 'react'
import { Link } from 'react-router-dom'

export default function MainNav() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
            
            
            
            
            <div className="container">
                <Link to = "/">
            <img to="/inicio" src="https://www.vivatheme.com/static/wp-content/uploads/sites/2/2022/03/logo.svg" id="logo1" className="d-block" />
            
            </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#noticias">Noticias</a>
                        </li> */}
                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/inversiones">Inversiones</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Demos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Pages</Link>
                        </li>
                        {<li className="nav-item">
                            <Link className="nav-link" to="#">Portafolio</Link>
                        </li> }
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/categorias">Clasificaciones</Link>
                        </li>
                        <button  className='  btn btn-primary tt_button tt_primary_button btn_gradient_color reverse_gradient' data-text="Visit on google maps"  >Suscribete</button>

                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/carrito">
                                <i className="bi bi-shop"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>





        </nav>
    )
}
