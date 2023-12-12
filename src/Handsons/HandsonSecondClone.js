import React from 'react'

const HandsonSecondClone = ({value,toggle}) => {
  return (
    <div>
        {value.map((item,index)=>{
            return(
                <h1 key={index}>{item.name}</h1>
            )
        })}
        <button onClick={toggle}>Back</button>
    </div>
  )
}

export default HandsonSecondClone