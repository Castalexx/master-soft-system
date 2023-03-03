import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Access from './views/Access'
import AddService from './views/AddService'
import Home from './views/Home'
import Inbox from './views/Inbox'
import Index from './views/Index'
import NotFound from './views/NotFound'
import Register from './views/Register'
import Service from './views/Service'
import Status from './views/Status'

const App = () =>  {
  

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}></Route>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/addservice' element={<AddService />}></Route>
          <Route path='/service/:id' element={<Service />}></Route>
          <Route path='/inbox' element={<Inbox />}></Route>
          <Route path='/status/:id' element={<Status/>}></Route>
          <Route path='/access' element={<Access />}></Route>
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App
