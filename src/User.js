import React from 'react'
import { useParams } from 'react-router-dom';
//allows us to access the parameter of the current route. and it returns an object containing key-value pairs of the parameter

const User = () => {
    const {id} = useParams();

  return (
    <>
    {/* <div>User {id}</div> */}
    <h1>{id}</h1>
    </>
  )
}

export default User