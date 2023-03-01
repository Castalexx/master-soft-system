import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'
import { AxiosHeaders } from 'axios'
const AddService = () => {

  useEffect(() => {
    axios.get('http://localhost:8000/api/user', {headers: {...AxiosHeaders, user: user}})
  .then((res) => {
    if(service.idClient !== res.data._id) {
      setService({
        ...service,
        idClient: res.data._id
      })
    }
    
  })
  })

  const user = localStorage.getItem('user')
  const navigate = useNavigate()

  const [service, setService] = useState({
    title: '',
    status: '',
    description: '',
    comments: '',
    idClient: 0

  })

  

  const handleChange = (e) => {
    const {name, value} = e.target;
    setService({
      ...service,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    axios.post('http://localhost:8000/api/newservice', {
      ...service,
      date: date
    })
    .then(navigate('/home'))
  }

  return (
    <div>
      <Header />
      <h2 className='text-center'>Solicitud de servicio</h2>
      <form className='grid w-25 text-center mx-auto' onSubmit={handleSubmit}>
    
          <label htmlFor="title" className='form-label'>Titulo</label>
          <input type="text" name="title" id="title" value={service.title} onChange={handleChange} className='form-control'/>
          <label htmlFor="status" className='form-label'>Estado</label>
          <input type="text" name="status" id="status" value={service.status} onChange={handleChange} className='form-control'/>
          <label htmlFor="description" className='form-label'>Descripción</label>
          <input type="text" name="description" id="description" value={service.description} onChange={handleChange} className='form-control'/>
          <label htmlFor="comments" className='form-label'>Comentarios</label>
          <input type="text" name="comments" id="comments" value={service.comments} onChange={handleChange} className='form-control'/>
          <button type="submit" className='btn btn-primary mt-3'>Enviar solicitud</button>
        
      </form>
      <Footer />
    </div>
  )
}

export default AddService