import React from 'react'

function TestArgComponent({text, type} : {text : string, type : string}) {
  return (
    <div className='bg-red-400'>
        <h1>Type is {type}</h1>
        <p>{text}</p> 
        <input type={type}/>
    </div>
  )
}

export default TestArgComponent