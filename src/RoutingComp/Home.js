import React from 'react'
import Navbar from '../Navbar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div>Home</div>
    <Link to="/users/mobile">User 1</Link>
    <Link to="/users/laptop">User 2</Link>
    <Link to="/users/tablet">User 3</Link>
    </>
  )
}

export default Home