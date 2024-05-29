import React from 'react'
import Button from '../Components/Button'
import {CardsBespoke} from '../constants/index.js'
import BespokeCard from '../Components/BespokeCard.jsx'
const BespokeContent = () => {
  return (
    <section className=' pb-5 set-bg text-white padding flex md:justify-between max-md:flex-col max-md:gap-14'>
       <div>
        <div className='  mb-4'>
            <h1 className=' text-white sm:text-[30px] font-inter  max-sm:text-[20px] font-medium sm:w-[320px] max-sm:w-[290px]'>Our bespoke website include the following </h1>
       <p className='font-inter sm:w-[320px] max-sm:w-[290px]  sm:text-[13px] max-sm:text-[13px] pt-5  text-white '>Lorem ipsum dolor sit amet consectetur. Blandit sodales lacus vulputate aenean aliquam accumsan vestibulum in sit Blandit sodales lacus vulputate aenean aliquam accumsa</p>
        </div>
        <Button borderbtn={true} buttonText={"CONTACT US"} />
  </div>  
  <div className=' w-[380px] set-width max-md:m-auto grid md:grid-col-6 gap-5 max-md:grid-cols-12'>
{
CardsBespoke.map((items,index)=>{
  return  <div key={index} className=' md:col-span-6 max-md:col-span-12 '>
<BespokeCard 
imgUrl={items.imgUrl} 
label={items.label} 
Desc={items.Desc} 

/>
    </div>
})
}
  </div>
  </section>
  )
}

export default BespokeContent