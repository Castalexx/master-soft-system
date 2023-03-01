import React from 'react'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

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
      <div className='w-75 mx-auto'>
        <h2>Servicios pendientes de respuesta</h2>
        <table className='table table-striped'>
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
                    <td>{service.date}</td>
                    <td><Link to={'/status/' + service._id}>{service.client}</Link></td>
                    <td>{service.title}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <h2>Servicios en tramite</h2>
        <table className='table table-striped'>
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
      
      <Footer />
    </div>
  )
}

export default Inbox