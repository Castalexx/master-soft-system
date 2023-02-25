import React from 'react'
import Header from '../components/Header'


const AddService = () => {
  return (
    <div>
      <Header />
      <form>
        <label htmlFor="">Titulo</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Estado</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Descripción</label>
        <input type="text" name="" id="" />
        <label htmlFor="">Comentarios</label>
        <input type="text" name="" id="" />
        <button type="submit">Enviar solicitud</button>
      </form>
    </div>
  )
}

export default AddService