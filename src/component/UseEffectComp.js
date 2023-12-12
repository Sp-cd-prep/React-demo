import React ,{useEffect, useState} from 'react'

const UseEffectComp = () => {
    const[count,setCount]=useState(0);
    const[count2,setCount2]=useState(0);
  
    useEffect(()=>{
        alert("clicked")
    },[count])
    
  return (
    <div>
        <h1>counter:{count}</h1>
        <button onClick={()=>setCount(count+1)}>click</button>
        <h1>counter:{count2}</h1>
        <button onClick={()=>setCount2(count2+1)}>click</button>
    </div>
  )
}

export default UseEffectComp