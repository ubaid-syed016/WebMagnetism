import React from 'react'
import '../style/ButtonStyles.css'
import Arrow from '../../Images/NorthEast.png'
import { Link } from 'react-router-dom'
const Button = ({buttonText,borderbtn }) => {
  return (<>
  
    <button className={`${borderbtn?'borderbtn' : 'btn' } text-sm  whitespace-nowrap rounded-3xl  py-2 px-5 flex gap-2 items-center font-inter`}>{buttonText} <img src={Arrow} height={"13px"} width="18px" alt="Arrow setup" /></button>
  
    </>
  )
}

export default Button