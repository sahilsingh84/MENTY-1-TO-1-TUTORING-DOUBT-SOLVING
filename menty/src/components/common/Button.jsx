import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({text,path}) => {
    const navigate=useNavigate();
  function handleOnClick(){
        navigate(`/${path}`)
  }

  return (
    <button onClick={handleOnClick}>
        {text}
    </button>
  )
}

export default Button
