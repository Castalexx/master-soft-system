import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Status = () => {

  const navigate = useNavigate()

  const [service, setService] = useState({
    title: '',
    status: '',
    description: '',
    comments: []
  })

  useEffect(() => {
    axios.get('http://localhost:8000/api/service/' + params.id)
    .then((res) => setService(res.data))
  })

  const [display, setDisplay] = useState('display-off');
  const [display1, setDisplay1] = useState('display-on')

  const params = useParams()

  

  const [description, setDescription] = useState('')


  const handleDelete = () => {
    axios.delete('http://localhost:8000/api/service/' + params.id)
    .then(navigate('/inbox'))
  }

  const showEditDescription = () => {
    setDescription(service.description)
    switch(display) {
      case 'display-off':
        setDisplay('display-on');
        setDisplay1('display-off'); 
        break;
      case 'display-on':
        setDisplay('display-off');
        setDisplay1('display-on');
        break;
    }
    switch(display1) {
      case 'display-off':
        
        break;
      case 'display-on':
        
        break;
    }

  } 

  const handleChange = (e) => {
    const {value} = e.target;
    setDescription(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setService({
      ...service,
      description: description
    })
    axios.put('http://localhost:8000/api/editservice/' + params.id, {description})
    .then(showEditDescription)
  }

  return (
    <div>
      <h2>{service.client}</h2>
      <h3>{service.title}</h3>
      <h3>Description</h3>
      <p className={display1}>{service.description}</p>
      <form className={display} onSubmit={handleSubmit}>
      <input name='description' value={description} onChange={handleChange}/>
      <button className='btn btn-success'>Guardar</button>
      </form>
      <button className={display1 + ' btn btn-dark'} onClick={showEditDescription} >Edit</button>
      <h3>Comentarios</h3>
      {
        service.comments.map((comment, index) => {
          return (
            <p key={index}>•{comment}</p>
          )
        })
      }
    </div>
  )
}

export default Status