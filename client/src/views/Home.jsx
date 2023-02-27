import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Home = () => {

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
      <div className='center'>
        <h2>Nombre de la empresa</h2>
        <Link to={'/addservice'}><button className='btn btn-primary'>Solicitar servicio</button></Link>
        <h4>Servicios solicitados</h4>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Titulo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {
              services.map((service, index) => {
                return (
                  <tr key={index}>
                    <td>fecha</td>
                    <td><Link to={'/service/' + service._id}>{service.title}</Link></td>
                    <td>{service.status}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <h4>Servicios en tramites</h4>
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Titulo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            
          </tbody>
        </table>
      </div>
		</div>
  )
}

export default Home