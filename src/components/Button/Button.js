import React from 'react'
import './Button.css'
const Button = ({text,onClickFunction,width,height}) => {
  return (
    <button style={{width:width,height:height}}  onClick={onClickFunction} >
      {text}
    </button>
  )
}

export default Button
