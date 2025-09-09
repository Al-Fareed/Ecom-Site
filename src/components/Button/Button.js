import React from 'react'
import './Button.css'
const Button = ({onClickFunction,styles,children}) => {
  return (
    <button style={styles} onClick={onClickFunction} >
      {children}
    </button>
  )
}

export default Button
