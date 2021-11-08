import React from "react";
import './style.scss';

const ButtonClose = ({propClass, deletaTab}) => {
  const ownClass = 'button ' + propClass
  return(
    <button type="button" className={ownClass} onClick={deletaTab} ></button>
  )
}

export default ButtonClose;