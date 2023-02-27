import React, { useState } from 'react'
import Header from '../components/Header'
import axios from 'axios'

const Register = () => {

  const [register, setRegister] = useState({
    business: true,
    name: '',
    email: '',
    phone: '',
    password: '',
    collaborator: false
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
    axios.post('http://localhost:8000/api/registeruser', register)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
  }

  return (
    <div>
      <Header />
      <div className='row p-5'>
        
        <form className='col' onSubmit={handleRegister}>
          <h3>Register</h3>
          <div>
            <label htmlFor="">Soy</label>
            <select name="business" id="businnes" onChange={handleChange}>
              <option value={1}>Empresa</option>
              <option value={0}>Particular</option>
            </select>
          </div>
          <div>
            <label htmlFor="">Nombre</label>
            <input value={register.name} type="text" name="name" id="name" onChange={handleChange}/>
          </div>
          <div> 
            <label htmlFor="">Correo</label>
            <input type="email" name="email" id="email" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="">Teléfono</label>
            <input type="number" name="phone" id="phone" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="">Contraseña</label>
            <input type="password" name="password" id="password" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="">Confirmar Contraseña</label>
            <input type="password" name="cPassword" id="cPassword"/>
          </div>
          <button className='btn btn-primary' type='submit'>Registrar</button>
        </form>
        
        <form className='col'>
        <h3>Iniciar sesión</h3>
        <div>
          <label htmlFor="emailLogin">Correo</label>
          <input type="email" name="" id="emailLogin" />
        </div>
        <div>
          <label htmlFor="passwordLogin">Contraseña</label>
          <input type="password" name="" id="passwordLogin" />
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
        </form>
      </div>
      
    </div>
  )
}

export default Register