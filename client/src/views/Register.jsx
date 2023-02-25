import React, { useState } from 'react'
import Header from '../components/Header'

const Register = () => {

  const [register, setRegister] = useState({
    business: true,
    name: '',
    email: '',
    phone: '',
    password: ''
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

  return (
    <div>
      <Header />
      <div className='row p-5'>
        
        <form className='col'>
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
            <input type="password" name="cPassword" id="cPassword" onChange={handleChange}/>
          </div>
          <button className='btn btn-primary' type='submit'>Registrar</button>
        </form>
        
        <form className='col'>
        <h3>Iniciar sesión</h3>
        <div>
          <label htmlFor="">Correo</label>
          <input type="email" name="" id="" />
        </div>
        <div>
          <label htmlFor="">Contraseña</label>
          <input type="password" name="" id="" />
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
        </form>
      </div>
      
    </div>
  )
}

export default Register