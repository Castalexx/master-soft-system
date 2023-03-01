import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { AxiosHeaders } from 'axios'

const Home = () => {

  const navegar = useNavigate()

  const [services, setServices] = useState({user:{name:''}, services: []});
  const [loading, setLoading] = useState(false)
  const user = localStorage.getItem('user')

  useEffect(() => {
    axios.get('http://localhost:8000/api/services', {headers: {...AxiosHeaders, user: user}} )
    .then((res) => {
      setServices(res.data);
      setLoading(true)
    })
  })


  const handleLogout = () => {
    localStorage.removeItem('user')
    navegar('/register')
  }
  
  return (
    <div>
      <Header />
      <div className='w-75 mx-auto'>
        <h2>{services.user.name}</h2>
        <button className='btn btn-secondary' onClick={handleLogout}>Logout</button>
        <Link to={'/addservice'}><button className='btn btn-primary'>Solicitar servicio</button></Link>
        <h4>Servicios solicitados</h4>
        <table className='table table-striped'>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Titulo</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {
            services.services.map((service, index) => {
                return (
                  <tr key={index}>
                    <td>{service.date}</td>
                    <td><Link to={'/service/' + service._id}>{service.title}</Link></td>
                    <td>{service.status}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <h4>Servicios en tramites</h4>
        <table className='table table-striped'>
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
      <Footer />
		</div>
  )
}

export default Home