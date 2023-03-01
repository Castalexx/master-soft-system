import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const Index = () => {
  return (
    <div>
      <Header />
      <div>
        {/* Presentacion del inicio para clientes */}
        <h1>Solicite Diagnostico y/o presupuesto</h1>
        <h3>Registrese como empresa/particular</h3>
        <Link to={'/register'}><button>Registrarse/ Iniciar Sesión</button></Link>
      </div>
      <Footer />
    </div>
  )
}

export default Index