import React from 'react'

export const Input = ({InputTxt,InputType,InputID, InputPlaceholder, InputPattern, ErrorMessage}) => {
  return (
    <label className="input-wrapper" htmlFor={InputID}>
              {InputTxt}
              <input
                required
                type={InputType}
                name={InputID}
                id={InputID}
                placeholder={InputPlaceholder}
                pattern={InputPattern}
              />
              <span id="error-message">{ErrorMessage}</span>
            </label>
  )
}
