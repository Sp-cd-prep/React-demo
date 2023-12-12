import React from 'react'

const FormHandeling = () => {

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Form submited")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Name:
            <input type='text'/></label>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormHandeling