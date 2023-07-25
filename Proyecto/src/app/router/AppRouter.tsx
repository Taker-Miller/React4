'use client'
import React from 'react'
import {Routes,Route} from 'react-router-dom'
import { Saludo } from '../Componentes/Inicio'
import { Formulario } from '../Componentes/Formulario'
import { Registros } from '../Componentes/Registros';
import { Actualizar } from '../Componentes/Actualizar'
import { QuienesSomos } from '../Componentes/QuienesSomos'
import Consejos from '../Componentes/Consejos'
import VentaPlantas from '../Componentes/VentaPlantas'
import { VentaHerramientas } from '../Componentes/VentaHerramientas'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path='/*' element={<Saludo nombre={"Jose"}/>}/>
        <Route path='/formulario' element={<Formulario/>}/>
        <Route path='/mostrar' element={<Registros/>}/>
        <Route path='/actualizar/:idPersona' element={<Actualizar/>}/>
        <Route path="/quienes-somos" element={<QuienesSomos />} />
        <Route path="/Consejos" element={<Consejos />} /> 
        <Route path="/VentaPlantas" element={<VentaPlantas />} />
        <Route path="/VentaHerramientas" element={<VentaHerramientas />} />

    </Routes>
  )
}
