import React from 'react'
import Envios from '../home/Envios'
import MainBanner from '../home/MainBanner'
import Nosotros from '../home/Nosotros'
import Noticias from '../home/Noticias'
import Tienda from './Tienda'
import Productos from '../components/Productos'

export default function Inicio() {
    return (
        <>
            <MainBanner />
            
            <Productos/>
            <Nosotros />
            <Noticias />
            
        </>
    )
}
