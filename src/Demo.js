import React, { useState, useEffect,useRef } from "react";

// const MultiCounterApp = () => {
//   const [counters, setCounters] = useState([0, 0, 0]);

//   const incrementCounter = (index) => {
//     setCounters((prevCounters) => {
//       const newCounters = [...prevCounters];
//       // console.log(newCounters,"newcounter");
//       newCounters[index] += 1;
//       return newCounters;
//     });
//   };

//   const decrementCounter = (index) => {
//     setCounters((prevCounters) => {
//       const newCounters = [...prevCounters];
//       newCounters[index] -= 1;
//       return newCounters;
//     });
//   };

//   return (
//     <div>
//       {counters.map((count, index) => (
//         <div key={index}>
//           <p>Counter {index + 1}: {count}</p>
//           <button onClick={() => incrementCounter(index)}>Increment</button>
//           <button onClick={() => decrementCounter(index)}>Decrement</button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default MultiCounterApp;

// import React, { useState, useEffect } from 'react';

// const ExampleComponent = () => {
//   const [data, setData] = useState([]);

//   // componentDidMount (runs once after the initial render)
//   useEffect(() => {
//     console.log("component didmount ")
//     // Simulating an API call
//     const fetchData = async () => {
//       const result = await fetch('https://jsonplaceholder.typicode.com/users');
//       const json = await result.json();
//       setData(json);
//     };
//     fetchData();

//     // componentWillUnmount (clean-up code)
//     return () => {
//         console.log('Component will unmount');
//         fetchData()
//       // Clean-up code here (e.g., canceling network requests, removing event listeners)
//     };
//   }, []); // Empty dependency array means it only runs once

//   // componentDidUpdate (runs on every render, but can be controlled with dependencies)
//   useEffect(() => {
//     // Simulating an effect on data change
//     console.log('Data updated:', data);
//   }, [data]); // This effect runs whenever 'data' changes

// //   console.log("render")
//   return (
//     <div>
//       <h1>Example Component</h1>
//       {/* Render data */}
//       <ul>
//         {data.map(item => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ExampleComponent;

// const Demo = () => {
//   const [widthCount, setWidthCount] = useState(window.screen.width);

//   const actualWidth=()=>{
//     console.log(window.innerWidth)
//     setWidthCount(window.innerWidth)
//   }
//   useEffect(()=>{
//     window.addEventListener('resize',actualWidth)

//     return()=>{
//         window.removeEventListener('resize',actualWidth)
//     }
//   })
//   return (
//     <div>
//       <p>The actual size of the window is:</p> 
//       <h1> {widthCount} </h1>
//     </div>
//   );
// };
// export default Demo;


// const Demo = () => {
//   const handleSubmit = (e) => {
//     // e.preventDefault(); // Prevents the default form submission behavior

//     // Your custom logic for handling the form submission
//     console.log('Form submitted!');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Name:
//         <input type="text" />
//       </label>
//       <br />
//       <button type="submit">Submit</button>
//     </form>
//   );
// };

// export default Demo;


// import React, { useRef } from 'react';


// function Demo() { 
//     const [inputValue, setInputValue] = useState(""); 
//     // const [count, setCount] = useState()
//     const count = useRef(0); 
//     console.log(count)

//     const changeStyle=()=>{
//     console.log(count.current);
//     count.current.style.backgroundColor = 'cyan'
//     }
//     // useEffect(() => { 
//     //     console.log("render")
//     //     // setCount(count+1);
//     //   count.current = count.current + 1; 
//     // },); 

//       return ( 
//         <> 
//           <input type="text" 
//           ref={count}
//           value={inputValue} 
//           onChange={(e) => 
//           setInputValue(e.target.value)} /> 
//           {/* <h1>Render Count: {count.current}</h1>  */}
//           <button onClick={changeStyle}>Submit</button>
//         </> ); 
//         } 
        
//   export default Demo;

