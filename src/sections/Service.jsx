import React from 'react'
import TransparentButton from '../Components/TransparentButton'
import  {ServiceCardContent} from '../constants/index.js'
import ServiceCard from '../Components/ServiceCard.jsx'
const Service = () => {
  return (
    <section className=' padding-x '>
        <h1 className='  font-inter font-medium  pt-[50px] text-center sm:text-[30px] max-sm:text-[20px] whitespace-nowrap'>Overview of Services</h1>
  <div className=' flex justify-between max-md:flex-col  max-md:items-center pb-[50px] flex-wrap pt-8 gap-7'>
   {
ServiceCardContent.map((items,index)=>{
   return <div className=' ' key={index}> 
   <ServiceCard
   imgUrl={items.imgUrl}
   label={ items.label}
   Desc={ items.Desc}
    buttonLabel={ items.buttonLabel}
   />
   </div>
})
   }
   </div>
    </section>
  )
}

export default Service