import React from 'react'

function AuthButton({type, text, onClick} : {type : "submit" | "reset" | "button" | undefined, text : string, onClick : React.MouseEventHandler<HTMLButtonElement>}) {
  return (
    <button 
    className="text-white bg-blue-500 w-full p-2 border-gray-600 rounded-xl hover:bg-blue-600"
    
    type={type} 
    onClick={onClick}
    >
        {text}
    </button>
  )
}

export default AuthButton