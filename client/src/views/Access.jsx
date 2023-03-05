import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useForm } from '../hooks/useForm'
import { useNavigate } from 'react-router-dom'

const Access = () => {

  const navegar = useNavigate()

  const initialForm = {
    email: '',
    password: '',
  }

  const validationsForm = (form) => {
    let errors = {};
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    const {email, password} = form
    
    if(!regexEmail.test(email)){
      errors.email = 'Complete un email valido'
    }
    if(!email.trim()){
      errors.email = 'Complete su email'
    }
    if(password.length < 8) {
      errors.password = 'La contraseña debe tener 8 caracteres como minimo'
    }
    if(!password.trim()){
      errors.password = 'Complete su contraseña'
    }
    

    return errors
  } 

  const {form, errors, loading, response, handleChange, handleBlur, handleSubmit} = useForm(initialForm, validationsForm, 'access')


  return (
    <div>
      <Header />
      <form className='col w-25 mx-auto' onSubmit={handleSubmit}>
        <h3>Iniciar sesión</h3>
        <div>
          <label htmlFor="email" className='form-label'>Correo</label>
          <input type="email" name="email" id="email" value={form.email} onChange={handleChange} className='form-control' />
          {
            errors.email && <p className='text-danger'>{errors.email}</p>
          }
        </div>
        <div>
          <label htmlFor="password" className='form-label'>Contraseña</label>
          <input type="password" name="password" id="password" value={form.password} onChange={handleChange} className='form-control'/>
          {
            errors.password && <p className='text-danger'>{errors.password}</p>
          }
        </div>
        <button className='btn btn-primary' type='submit'>Login</button>
        </form>
        <Footer />  
    </div>
  )
}

export default Access