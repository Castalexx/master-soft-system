import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Inbox = () => {

  const [services, setServices] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8000/api/services')
    .then((res) => {
      setServices(res.data);
      
    })
  })

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
          {
            services.map((service, index) => {
              return (
                <tr key={index}>
                  <td>fecha</td>
                  <td><Link to={'/status/' + service._id}>{service.client}</Link></td>
                  <td>{service.title}</td>
                </tr>
              )
            })
          }
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