import React, { useState } from 'react'

const ControlledComp = () => {
    const [input,setInput] = useState("");

    const handleChange=(e)=>{
        console.log(e)
        setInput(e.target.value)
    }

  return (
    <div>
        <input type='text' value={input} onChange={handleChange}/>
    </div>
  )
}

export default ControlledComp