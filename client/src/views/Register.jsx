import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navegar = useNavigate()

  const [register, setRegister] = useState({
    business: true,
    name: '',
    email: '',
    phone: '',
    password: '',
    collaborator: false,
    idClient: 1
    
  })

  const [login, setLogin] = useState({
    emailLogin: '',
    passwordLogin: ''
  })


  const handleChange = (e) => {
    const {name, value} = e.target;
    if(name== 'business') {
      if (value==1) {
        setRegister({
          ...register,
          [name]: true
        })
      } else {
        setRegister({
          ...register,
          [name]: false
        })
      }
      
    } else {
      setRegister({
        ...register,
        [name]: value
      })
    }
  }

  const handleRegister = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/registeruser', register, {withCredentials:true, credentials:'include'})
    .then((res) => {
      console.log(res.data)
      localStorage.setItem('user', res.data.accessToken)
    })
    .catch((err) => console.log(err))
    .then(navegar('/home'))
  }


  const handleChangeLogin = (e) => {
    const {name, value} = e.target
    setLogin({
      ...login,
      [name]: value
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/login', {
      email: login.emailLogin,
      password: login.passwordLogin
    }, {withCredentials:true, credentials:'include'})
    .then((res) => {
      localStorage.setItem('user', res.data.accessToken)
      navegar('/home')
    })
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <Header />
      <div className='row mx-5'>
        
        <form className='row g-12 w-50' onSubmit={handleRegister}>
          <h3>Register</h3>
          <div className='col-md-6'>
            <label htmlFor="" className='form-label'>Soy</label>
            <select className='form-control' name="business" id="businnes" onChange={handleChange}>
              <option value={1}>Empresa</option>
              <option value={0}>Particular</option>
            </select>
          </div>
          <div className='col-md-6'>
            <label htmlFor="" className='form-label'>Nombre</label>
            <input value={register.name} type="text" name="name" id="name" onChange={handleChange} className='form-control' />
          </div>
          <div className='col-md-6'> 
            <label htmlFor="" className='form-label'>Correo</label>
            <input type="email" name="email" id="email" onChange={handleChange} className='form-control'/>
          </div>
          <div className='col-md-6'>
            <label htmlFor="" className='form-label'>Teléfono</label>
            <input type="number" name="phone" id="phone" onChange={handleChange} className='form-control'/>
          </div>
          <div>
            <label htmlFor="" className='form-label'>Contraseña</label>
            <input type="password" name="password" id="password" onChange={handleChange} className='form-control'/>
          </div>
          <div>
            <label htmlFor="" className='form-label'>Confirmar Contraseña</label>
            <input type="password" name="cPassword" id="cPassword" className='form-control'/>
          </div>
          <button className='btn btn-primary w-25 mx-auto my-3' type='submit'>Registrar</button>
        </form>
        
        <form className='col w-50' onSubmit={handleLogin}>
        <h3>Iniciar sesión</h3>
        <div>
          <label htmlFor="emailLogin">Correo</label>
          <input type="email" name="emailLogin" id="emailLogin" value={login.emailLogin} onChange={handleChangeLogin} className='form-control' />
        </div>
        <div>
          <label htmlFor="passwordLogin">Contraseña</label>
          <input type="password" name="passwordLogin" id="passwordLogin" value={login.passwordLogin} onChange={handleChangeLogin} className='form-control'/>
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
        </form>
      </div>
      <Footer />
    </div>
  )
}

export default Register