import React, { useEffect, useState } from 'react'
import { ApiWebURL } from '../utils';
import './Envios.css';

export default function Envios() {
    const [listaEnvios, setListaEnvios] = useState([]);

    useEffect(() => {
        leerServicio();
    },[])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "servicioempleados.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaEnvios(data);
            });
    }

    return (
        <section id="envios" className='padded'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>Tiendas Fisicas</h2>
                    </div>
                    
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Numero de tienda</th>
                                    <th>Ciudad</th>
                                    <th>Direccion</th>
                                </tr>
                            </thead>
                            <tbody>
                            {listaEnvios.map(item =>
                                    <tr key={item.idempleado}>
                                    <td>{item.codigopostal}</td>
                                    <td>{item.ciudad}</td>
                                    <td>{item.direccion}</td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    
                </div>
            </div>
        </section>
    )
}
