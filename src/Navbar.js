import React from 'react'
import { Link ,NavLink} from 'react-router-dom'
import './App.css'

const Navbar = () => {

  return (
    <div>
         <nav className='navBar'>
            <NavLink to='/' style={({isActive})=>({color:isActive?"red":"orange"})}>Home</NavLink>
            <NavLink to='/about' style={({isActive})=>({color:isActive?"red":"orange"})} >About</NavLink>
            <NavLink to='/contact'style={({isActive})=>({color:isActive?"red":"orange"})} >Contact</NavLink>
        </nav>
    </div>
  )
}

export default Navbar