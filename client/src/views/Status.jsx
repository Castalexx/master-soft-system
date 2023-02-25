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
  const params = useParams()

  useEffect(() => {
  axios.get('http://localhost:8000/api/service/' + params.id)
    .then((res) => setService(res.data))
  })

  const handleDelete = () => {
    axios.delete('http://localhost:8000/api/service/' + params.id)
    .then(navigate('/inbox'))
  }
  return (
    <div>
      <h2>{service.client}</h2>
      <h3>{service.title}</h3>
      <h3></h3>
      <p>{service.description}</p>
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