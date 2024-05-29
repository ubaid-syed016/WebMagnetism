import React from 'react'
import Funnel from '../../Images/FunnelRemove.png'
const DigitalMarket = () => {
  return (
    <section className=' padding overflow-hidden  flex justify-center flex-col  items-center'>
        <h1 className=' sm:w-[550px] font-inter text-[28px] max-sm:text-[18px] max-sm:w-[290px]  font-medium text-center '>An Integrated Team for unique Web design and strategic digital marketing</h1>
        <p className='sm:w-[450px] text-center text-[16px] max-sm:w-[290px] max-sm:text-[13px] pt-3 max-sm: mb-6 '>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit m accumsan.</p>
        <img src={Funnel} alt="" className=' sm:w-[350px] max-sm:w-[250px]' />
    </section>
  )
}

export default DigitalMarket