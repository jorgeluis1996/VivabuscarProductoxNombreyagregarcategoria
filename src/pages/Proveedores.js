import React, { useEffect, useState } from 'react'
import { ApiWebURL } from '../utils';

export default function Proveedores() {
    const [listaProveedores, setListaProveedores] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio =  ApiWebURL + "proveedores.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaProveedores(data);
                setCargando(false);
            });
    }

    const dibujarTabla = () => {
        return(
            <table className="table">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Fecha de publicacion</th>
                            <th>Noticia</th>
                            <th>Primicia</th>
                            <th>Resumen</th>
                            <th>contenido</th>
                            <th>Desenlace</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listaProveedores.map(item =>
                            <tr key={item.idnoticia}>
                                <td>{item.idnoticia}</td>
                                <td>{item.fecha}</td>
                                <td>{item.titulo}</td>
                                <td>{item.volanta}</td>
                                <td>{item.contenido}</td>
                                <td>{item.bajada}</td>
                                <td>{item.bajada}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
        )
    }



    return (
        <section id="proveedores" className='padded'>
            <div className="container">
                <h2>Noticias</h2>
                {cargando
                    ?<div className="spinner"></div> 
                    :dibujarTabla()}
            </div>
        </section>
    )
}
