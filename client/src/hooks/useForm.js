import { useState } from 'react'
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

export const useForm = (initialForm, validateForm, origin) => {

  const navegar = useNavigate()


  const [form, setForm] =  useState(initialForm);
  const [empty, setEmpty] = useState(true)
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null)


  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value
    })
    setEmpty(false)
  }

  const handleBlur = (e) => {
    handleChange(e);
  }

  const handleSubmit = (e) => {
    setErrors(validateForm(form));
    e.preventDefault();
    
    if(Object.keys(errors).length === 0) {
      if(!empty) {
        setLoading(true)
        if(origin == 'register') {
          const {business} = form
          Boolean(business)
          axios.post('http://localhost:8000/api/registeruser', {
          ...form,
          collaborator: false
          }, {withCredentials: true, credentials:'include'})
          .then((res) => {
            setLoading(false);
            setResponse("Creado con exito")
            localStorage.setItem('user', res.data.accessToken)
            navegar('/home')
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setResponse("No fue creado")
          })
        } else if (origin == 'login'){
          const {business} = form
          Boolean(business)
          axios.post('http://localhost:8000/api/login', form, {withCredentials: true, credentials:'include'})
          .then((res) => {  
            setLoading(false);
            setResponse("Inicio de sesion exitoso")
            localStorage.setItem('user', res.data.accessToken)
            navegar('/home')
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setResponse("Fallido")
          })
        } else if(origin == 'addservice') {
          axios.post('http://localhost:8000/api/newservice', form, {withCredentials: true, credentials:'include'})
          .then((res) => {  
            setLoading(false);
            setResponse("Servicio enviado")
            console.log(res)
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setResponse("Fallido")
          })
          
        }else {
          axios.post('http://localhost:8000/api/login/internal', form, {withCredentials: true, credentials:'include'})
          .then((res) => {  
            setLoading(false);
            setResponse("Logueado")
            console.log(res)
            localStorage.setItem('user', res.data.accessToken)
            navegar('/inbox')
          })
          .catch((err) => {
            console.log(err);
            setLoading(false);
            setResponse("Fallido")
          })
        }
      }
      
    } else {
      return;
    }
  }

  return {
    form, setForm, errors, loading, response, handleChange, handleBlur, handleSubmit
  }
}
