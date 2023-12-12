import React, { Component, useState } from 'react'
import HandsonSecondClone from './HandsonSecondClone';

const HandsonSecond=()=>{

    const [name,setName] = useState("");
    const [data,setData] = useState([])
    const [click,setClick] = useState(true);

   const handleChange=(e)=>{
        console.log(e)
        setName(e.target.value);
    }
   const handleClick=()=>{
        const obj={
            name:name
        }
        const value=[...data,obj]
        console.log(value,"value")
        setData(value)
        setClick(false)
    }
    
    const toggleFunction=()=>{
        setClick(!click)
    }

    return (
      <div>
        {click?( 
        <>
        <input name='name' placeholder='Enter your name' onChange={handleChange}/>
        <button onClick={handleClick}>Submit</button>
        </>
        ) : (
        <HandsonSecondClone value = {data} toggle = {toggleFunction}/>
        )}
      </div>
    )
  }

export default HandsonSecond
// import React, { Component } from 'react'
// import HandsonSecond from './HandsonSecond';

// export default class HandsonSecond extends Component {
//     state={
//         name:"",
//         data:[]
//     }

//     handleChange=(e)=>{
//         console.log(e)
//         this.setState({[e.target.name]:e.target.value})
//     }

//     handleClick=()=>{
//         const obj={
//             name:this.state.name
//         }
//         const value=this.state.data
//         console.log(value,"value")
//         value.push(obj)
//         console.log("after value")
//         this.setState({[this.state.data]:value})
//         console.log(this.state.data)
//     }
//   render() {
//     return (
//       <div>
//         <input name='name' placeholder='Enter your name' onChange={this.handleChange}/>
//         <button onClick={this.handleClick}>Submit</button>
//         {this.state.data.map((item,index)=>{
//             return(
//                 <h1>{item.name}</h1>
//             )
//         })}
//       </div>
//     )
//   }
// }
