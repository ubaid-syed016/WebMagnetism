import React from 'react'
import BlackArrow from '../../Images/blackArr.png'
const TransparentButton = ({Btnlabel}) => {
  return (
    <button className=' set-gradientBorder flex items-center'>{Btnlabel} <img src={BlackArrow} height={"13px"} width="18px" alt="Arrow setup"/></button>
  )
}

export default TransparentButton