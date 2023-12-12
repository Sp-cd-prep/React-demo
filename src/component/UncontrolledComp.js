import React, { useRef, useState } from 'react'

const UncontrolledComp = () => {
    const input = useRef();

    const handleChange=(e)=>{
        console.log(input.current.value,"input value")
    }
  return (
    <div>
        <input type='text'
        ref={input} 
        />
        <button onClick={handleChange}>Click</button>

    </div>
  )
}

export default UncontrolledComp