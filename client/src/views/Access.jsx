import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Access = () => {

  const navegar = useNavigate()

  const [login, setLogin] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setLogin({
      ...login,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/login/internal', login, {withCredentials:true, credentials:'include'})
    .then((res) => {
      localStorage.setItem('user', res.data.accessToken)
      navegar('/inbox')
    })
    .catch((err) => console.log(err))
  }


  return (
    <div>
      <Header />
      <form className='col w-25 mx-auto' onSubmit={handleSubmit}>
        <h3>Iniciar sesión</h3>
        <div>
          <label htmlFor="email" className='form-label'>Correo</label>
          <input type="email" name="email" id="email" value={login.email} onChange={handleChange} className='form-control' />
        </div>
        <div>
          <label htmlFor="password" className='form-label'>Contraseña</label>
          <input type="password" name="password" id="password" value={login.passwordLogin} onChange={handleChange} className='form-control'/>
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
        </form>
        <Footer />  
    </div>
  )
}

export default Access