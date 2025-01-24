import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'

import Layout from './components/ui/Layout'

import Modal from './components/ui/Modal'
import Home from './pages/Home/index'
import Products from './pages/Products/index'
import Contact from './pages/Contact/index'




function App() {
  return(
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
        </Route>
        <Route path="/products" element={<Layout/>}>
          <Route index element={<Products/>}/>
        </Route>
        <Route path="/contact" element={<Layout/>}>
          <Route index element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
  
}

export default App
