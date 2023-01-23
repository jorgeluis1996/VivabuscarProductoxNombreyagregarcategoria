import React, { useEffect, useState } from 'react'
import { ApiWebURL } from '../utils';

export default function Empleados() {
    const [listaEmpleados, setListaEmpleados] = useState([]);

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio = ApiWebURL + "servicioempleados.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaEmpleados(data);
            });
    }
    return (
        <section id="empleados" className='padded'>
            <div className="container">
                <h2>Locales habiertos</h2>
                <br></br>
                <div className="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 g-4">

                {listaEmpleados.map(item =>
                    <div className="col" key={item.idempleado}>
                        <div className="card">
                            <img src={ ApiWebURL + "fotos/" + item.foto} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.pais} {item.ciudad}</h5>
                                    <p className="card-text">{item.direccion}</p>
                                </div>
                        </div>
                    </div>
                )}

                </div>
            </div>
        </section>
    )
}
