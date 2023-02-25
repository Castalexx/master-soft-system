import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddService = () => {
  
  const navigate = useNavigate()

  const [service, setService] = useState({
    title: '',
    status: '',
    description: '',
    comments: ''
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
    axios.post('http://localhost:8000/api/newservice', {
      ...service,
      client: 'Default'
    })
    .then(navigate('/home'))
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" id="title" value={service.title} onChange={handleChange}/>
        <label htmlFor="status">Estado</label>
        <input type="text" name="status" id="status" value={service.status} onChange={handleChange}/>
        <label htmlFor="description">Descripción</label>
        <input type="text" name="description" id="description" value={service.description} onChange={handleChange} />
        <label htmlFor="comments">Comentarios</label>
        <input type="text" name="comments" id="comments" value={service.comments} onChange={handleChange}/>
        <button type="submit">Enviar solicitud</button>
      </form>
    </div>
  )
}

export default AddService