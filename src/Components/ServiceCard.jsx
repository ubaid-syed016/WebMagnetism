import React from 'react'
import TransparentButton from './TransparentButton'

const ServiceCard = ({imgUrl,label,Desc, buttonLabel}) => {
  return (
    <div className=''>
        <img src={imgUrl} className=' rounded-xl h-[250px] max-sm:w-[250px]  sm:w-[320px] object-cover' alt="label" />
        <h3 className=' text-inter  font-medium py-3'>{label}</h3>
        <p className='max-sm:w-[250px]  sm:w-[320px]   text-text-color  font-inter text-[12px] pb-2'>{Desc}</p>
        <TransparentButton Btnlabel={ buttonLabel} />
    </div>
  )
}

export default ServiceCard