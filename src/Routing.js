import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import {Routes,Route} from 'react-router-dom'
import Home from './RoutingComp/Home'
import About from './RoutingComp/About'
import Contact from './RoutingComp/Contact'
import './App.css'
import User from './User'

const Routing = () => {
  return (
    <>  
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/users/:id" element={<User/>}/>
            </Routes>
    </BrowserRouter>
        </>
  )
}

export default Routing