import React from 'react'

const Button = ({ loading, onClickHandler }) => {
  return (
    <input className="btn btn-primary" type="button" value={loading ? "loading" : "Start"} onClick={onClickHandler} />
  )
}

export default Button;
