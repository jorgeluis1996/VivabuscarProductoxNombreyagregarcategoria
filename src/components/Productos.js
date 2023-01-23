import React, { useEffect, useState } from 'react'
import './Productos.css';
import noImagen from './../assets/images/no-imagen.jpg';
import { ApiWebURL } from '../utils';
import { Link } from 'react-router-dom';

export default function Productos(props) {
    const [listaProductos, setListaProductos] = useState([]);
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [itemProducto, setItemProducto] = useState([]);
    const [textoBuscar, setTextoBuscar] = useState("");
    //console.log(props)
    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = async () => {
        const rutaServicio = ApiWebURL + "servicioproductostodos.php" ;
        
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaProductos(data);
                setDatos(data);
                setCargando(false);
            });
        
        const response = await fetch(rutaServicio);
        const data = await response.json();
        setListaProductos(data);
    }

    const dibujarTabla = () => {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Producto</th>
                        <th className="text-end">Precio S/</th>
                    </tr>
                </thead>
                <tbody>
                    {datos.map(item =>
                        <tr key={item.idproducto}>
                            <td>{item.idproducto}</td>
                            <td>{item.nombre}</td>
                            <td className="text-end">
                                <span className='precio-lista'>
                                    {item.preciorebajado !== "0"
                                        ? parseFloat(item.precio).toFixed(2)
                                        : ""}
                                </span> {item.preciorebajado === "0"
                                    ? parseFloat(item.precio).toFixed(2)
                                    : parseFloat(item.preciorebajado).toFixed(2)}

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }

    const agregarCarrito = (item) => {
        item.cantidad = 1;
        console.log(item);
        let carrito = [];
        if (sessionStorage.getItem("carrito")) {
            carrito = JSON.parse(sessionStorage.getItem("carrito"));
            let index = -1;
            for (let i = 0; i < carrito.length; i++) {
                let itemCarrito = carrito[i];
                if (itemCarrito.idproducto === item.idproducto) {
                    index = i;
                    break;
                }
            }
            if (index === -1) {
                carrito.push(item);//Así se agrega un elemento a un arreglo
                sessionStorage.setItem("carrito", JSON.stringify(carrito));
            }
            else {
                let iCarrito = carrito[index]
                iCarrito.cantidad++
                carrito[index] = iCarrito;
                sessionStorage.setItem("carrito", JSON.stringify(carrito));
            }
        }
        else {
            carrito.push(item);//Así se agrega un elemento a un arreglo
            sessionStorage.setItem("carrito", JSON.stringify(carrito));
        }
    }

    const dibujarCuadricula = () => {
        return (
            
            <section id="" className='padded'>
            <div className="container">
                <h2>Productos Disponbles</h2>
                <br></br>
            <div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 g-4" id="cards-productos">

                {datos.map(item =>
                    <div className="col" key={item.idproducto}>
                        <div className={item.preciorebajado === "0"
                        ? 'card'
                        : 'concar'}>

                            <Link to={"/productodetalles/" + item.idproducto}>
                                <img src={item.imagenchica === null 
                                    ? noImagen
                                    : ApiWebURL + item.imagenchica}
                                    className="card-img-top" alt="..." />
                            </Link>


                            <div className={item.preciorebajado === "0"
                                ? 'sin-oferta'
                                : 'con-oferta'}>
                                {Math.round((1 - parseFloat(item.preciorebajado) / (item.precio)) * 100)}%
                            </div>
                            <div className="card-body">
                                <h6 className="card-title">{item.nombre}
                                    
                                </h6>
                                <p className="card-text">S/ {item.preciorebajado === "0"
                                    ? parseFloat(item.precio).toFixed(2)
                                    : parseFloat(item.preciorebajado).toFixed(2)}
                                    <span className='precio-lista'>
                                        {item.preciorebajado !== "0"
                                            ? "S/" + parseFloat(item.precio).toFixed(2)
                                            : ""}
                                    </span>
                                    <i className="bi bi-shop btnCarrito" title="Añadir al carrito"
                                        onClick={() => agregarCarrito(item)}></i>
                                </p>
                            </div>
                        </div>
                    </div>
                )}

            </div>
            </div>
        </section>

        )
    }

    const mostrarVistaRapida = async (idproducto) => {
        //console.log(idproducto);
        const rutaServicio = ApiWebURL + "productos.php?idproducto=" + idproducto;
        /*
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setItemProducto(data[0])
            });
        */
        const response = await fetch(rutaServicio);
        const data = await response.json();
        setItemProducto(data[0])
    }

    const dibujarVistaRapida = () => {
        return (
            <div className="modal fade" id="vistaRapidaModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">{itemProducto.nombre}</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md">
                                    <img src={itemProducto.imagengrande === null
                                        ? noImagen
                                        : ApiWebURL + itemProducto.imagengrande} alt="" className='img-fluid' />
                                </div>
                                <div className="col-md">
                                    <table className="table">
                                        <tbody>
                                            <tr><th>Detalle</th><td>{itemProducto.detalle}</td></tr>
                                            <tr><th>Precio</th><td>
                                                S/ {itemProducto.preciorebajado === "0"
                                                    ? parseFloat(itemProducto.precio).toFixed(2)
                                                    : parseFloat(itemProducto.preciorebajado).toFixed(2)}
                                                <span className='precio-lista'>
                                                    {itemProducto.preciorebajado !== "0"
                                                        ? "S/" + parseFloat(itemProducto.precio).toFixed(2)
                                                        : ""}
                                                </span>
                                            </td></tr>
                                            <tr><th>Categoría</th><td>{itemProducto.categoria}</td></tr>
                                            <tr><th>Proveedor</th><td>{itemProducto.proveedor}</td></tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Agregar al carrito</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    const buscar = () =>{
        let datosFiltrados = listaProductos.filter(item =>{
        return textoBuscar === ""
        ?true
        : item["idproducto"].toLowerCase().indexOf(textoBuscar.toLowerCase())>-1 ||
        item["nombre"].toLowerCase().indexOf(textoBuscar.toLowerCase())>-1 

        });
        setDatos(datosFiltrados);
    }

    return (
        <section className='padded'>
            <div className="container">
                <h2>Buscar Producto</h2>
                
<br></br>
        <><div className="mb-3">
                    <div className="contenido2">
                    
                    <input margin-right="15px" type="text" placeholder='Ingrese nombre del Producto' className=' form-control'
                    value={textoBuscar} onChange={(event) => setTextoBuscar(event.target.value)} />
                    <br></br>
                    <button  className='  btn btn-primary tt_button tt_primary_button btn_gradient_color reverse_gradient' data-text="Visit on google maps" onClick={()=> buscar()} >Buscar</button>
                    </div>
                    
                </div>
                {cargando
                ?<div className="spinner"></div>
                :dibujarCuadricula()}
            
           
                
                
            
            
        </>
        </div>
        </section>
    )
}
