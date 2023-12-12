import React from 'react'
import { useState, useEffect } from 'react';








const Function=()=>{
  const[widthCount,setWidthCount] = useState(window.screen.width)
  console.log(widthCount)

const updatedWidth = ()=>{
  console.log(window.innerWidth);
  setWidthCount(window.innerWidth)
}

useEffect(()=>{
  window.addEventListener('resize',updatedWidth)

  return()=>{
    window.removeEventListener('resize',updatedWidth)
  }
})
  return(
    <>
      <p>The actual size of the window:</p>
      <h1>{widthCount}</h1>
    </>
  )
}

export default Function















// const Function = () => {

//   const[data,setData]   =  useState([])

//   //componentDidMount(runs once after the initial render)
//   useEffect(()=>{
//     console.log("component did mount")
//     const fetchData= async()=>{
//      const result =  await fetch('https://jsonplaceholder.typicode.com/users')
//      const json = await result.json();
//     //  console.log(json);
//      setData(json);
//     }
//     fetchData();

//     //component willunmount
//     return()=>{
//       console.log("component will unmount")
//     }
//   },[]);
//   //component DidUpdate (runs on every render,but can be controlled with dependancies)
//   useEffect(()=>{
//     console.log(data,"update data")
//   },[data])//this effect runs ehwnever 'data' chnages

//   console.log("render")
// return (
//   <div>
//     <ul>
//       {data.map(item =>(
//         <li key={item.id}> {item.name}</li>
//       ))}
//     </ul>
//   </div>
//   )
// }


// export default Function

