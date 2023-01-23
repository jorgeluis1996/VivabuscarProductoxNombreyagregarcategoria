
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ApiWebURL } from '../utils';
import noImagen from './../assets/images/no-imagen.jpg';

export default function ProductoDetalles() {
    const [itemProducto, setItemProducto] = useState([]);
    let params = useParams();
    //console.log(params);
    useEffect(() => {
        leerServicio();
    }, []);

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "productos.php?idproducto=" + params.idproducto;
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setItemProducto(data[0]);
            });
    }
    return (
        <section className='padded'>
            <div className="container">
                <div className="row">
                    <div className="col-md">
                        <img src={itemProducto.imagengrande === null
                            ? noImagen
                            : ApiWebURL + itemProducto.imagengrande} alt="" className='img-fluid' />
                    </div>
                    <div className="col-md">
                        <h2>{itemProducto.nombre}</h2>
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
                                <tr><th>País</th><td>{itemProducto.pais}</td></tr>
                                <tr><th>Atención al cliente</th><td>{itemProducto.telefono}</td></tr>
                                <tr><th>Stock</th><td>{itemProducto.unidadesenexistencia}</td></tr>
                            </tbody>
                        </table>
                        <h3>Descripción</h3>
                        <div dangerouslySetInnerHTML={{__html: itemProducto.descripcion}}></div>

                    </div>
                </div>
            </div>
        </section>
    )
}
