import React from 'react'
const BespokeCard = ({imgUrl,label,Desc}) => {
  return (
    <div className=' flex flex-col p-6 bg-white rounded-xl  gap-3'>
       <img src={imgUrl} alt=""  height={"50px"} width={"50px"} className=' object-cover'/>
       <h1 className=' text-black text-[18px]  font-inter font-medium'>{label}</h1>
       <p className=' text-text-color text-[15px] '>{Desc}</p>
    </div>
  )
}

export default BespokeCard