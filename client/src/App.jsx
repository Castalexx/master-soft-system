import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import AddService from './views/AddService'
import EditService from './views/EditService'
import Home from './views/Home'
import Inbox from './views/Inbox'
import Index from './views/Index'
import Register from './views/Register'
import Service from './views/Service'

const App = () =>  {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/addservice' element={<AddService />}></Route>
          <Route path='/editservice/:id' element={<EditService />}></Route>
          <Route path='/service/:id' element={<Service />}></Route>
          <Route path='/inbox' element={<Inbox />}></Route>
          <Route></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
