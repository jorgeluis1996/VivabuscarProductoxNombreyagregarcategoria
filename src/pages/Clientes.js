import React, { useEffect, useState } from 'react'
import { ApiWebURL } from '../utils';

export default function Clientes() {
    const [listaClientes, setListaClientes] = useState([]);
    const [datos, setDatos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [textoBuscar, setTextoBuscar] = useState("");

    useEffect(() => {
        leerServicio();
    }, [])

    const leerServicio = () => {
        const rutaServicio =  ApiWebURL + "servicioclientes.php";
        fetch(rutaServicio)
            .then(response => response.json())
            .then(data => {
                //console.log(data);
                setListaClientes(data);
                setDatos(data);
                setCargando(false);
            });
            
    }

    const seleccionarEncabezado = () => {
        console.log("Hola");
    }

    const dibujarTabla = () => {/*
        let encabezadosClientes = document.querySelectorAll("#clientes-encabezado th");
        //querySelectorAll selecciona todos los objetos especificados y los almacena en el arreglo encabezadosclientes
        encabezadosClientes.forEach( item => {
            //forEach examina uno a uno los elementos del arreglo 
            item.addEventListener("click", () => seleccionarEncabezado())
        })*/
        return(
            <table className="table">
                    <thead id='clientes-encabezado'>
                        <tr>
                            <th campo="idproducto" onClick={()=> seleccionarEncabezado()}>Código</th>
                            <th campo="nombre">Videojuego</th>
                            <th campo="detalle">Detalle</th>
                            <th campo="precio">Precio</th>
                            <th campo="unidadesenexistencia">Unidades Disponibles</th>
                            
                            
                        </tr>
                    </thead>
                    <tbody>
                        {datos.map(item =>
                            <tr key={item.idproducto}>
                                <td>{item.idproducto}</td>
                                <td>{item.nombre}</td>
                                <td>{item.detalle}</td>
                                <td>$ {item.precio}</td>
                                <td>uni. {item.unidadesenexistencia}</td>
                                
                                
                            </tr>
                        )}
                    </tbody>
                </table>
        )
    }

    const buscar = () =>{
        let datosFiltrados = listaClientes.filter( item => {
            return textoBuscar === ""
            ? true
            : item["idproducto"].toLowerCase().indexOf(textoBuscar.toLowerCase())>-1 ||
            item["nombre"].toLowerCase().indexOf(textoBuscar.toLowerCase())>-1 

        });
        setDatos(datosFiltrados);
    } 

    return (
        <section className='padded'>
            <div className="container">
                <h2>Buscar Videojuegooos</h2>
<br></br>
                <div className="mb-3">
                    <div className="">
                    
                    <input type="text" placeholder='Ingrese nombre del videojuego' className=' form-control'
                    value={textoBuscar} onChange={(event) => setTextoBuscar(event.target.value)} />
                    <br></br>
                    <button className='btn btn-primary' onClick={()=> buscar()} >Buscar</button>
                    </div>
                    
                </div>

                {cargando
                    ?<div className="spinner"></div> 
                    :dibujarTabla()}
            </div>
        </section>
    )
}
