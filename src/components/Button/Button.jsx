import React from 'react'

export const Button = ({text , BtnType, BtnId}) => {
  return (
    <button disabled type={BtnType} id={BtnId}>
    {text}
     </button>
 
  )
}
