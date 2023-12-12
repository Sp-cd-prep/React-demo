import React, { useEffect, useRef, useState } from 'react'
//1. it create a mutable variable which will not re-render the components.
//2. used to access a DOM element directly
const UseRefHook = () => {
    
    const[input,setInput] = useState("");
    const count = useRef(0) ;
    console.log(count);

    const changeStyle=()=>{
        console.log(count.current)
        count.current.style.backgroundColor = "cyan";
    }

  return (
    <div>
        <input type='text' ref={count} value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button onClick={changeStyle}>Change Color</button>
    </div>
  )
}

export default UseRefHook