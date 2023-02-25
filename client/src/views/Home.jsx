import React from 'react'
import Header from '../components/Header'

const Home = () => {

  
  return (
    <div>
      <Header />
			<h2>Nombre de la empresa</h2>
      <h4>Servicios solicitados</h4>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Titulo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>

        </tbody>
      </table>
      <h4>Servicios en tramites</h4>
      <table>
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Titulo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>
		</div>
  )
}

export default Home