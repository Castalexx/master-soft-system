import React from 'react'
import Header from '../components/Header'

const Inbox = () => {
  return (
    <div>
      <Header />
      <h2>Servicios pendientes de respuesta</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Empresa/Particular</th>
            <th>Titulo</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <h2>Servicios en tramite</h2>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Empresa/Particular</th>
            <th>Titulo</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
    </div>
  )
}

export default Inbox