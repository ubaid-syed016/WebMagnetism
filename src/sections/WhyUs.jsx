import React from 'react'
import '../style/Hero.css'
import  {whyUs} from '../constants/index.js'
import UsButton from '../Components/UsButton'
const WhyUs = () => {
  return (
    <section className='  overflow-hidden relative '>
       
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 1440 320" ><path fill="#F3F2FF" fillOpacity="1" d="M0,96L120,85.3C240,75,480,53,720,58.7C960,64,1200,96,1320,112L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path></svg>
        <div className='  bg-[#F3F2FF]  -top-5 '>
      <h1 className=' relative -top-12 max-sm:-top-5 font-inter text-center text-black font-medium sm:text-[30px] max-sm:text-[25px] '>Why Choose Us</h1>
      <div className='padding-x max-sm:pt-3  max-lg:grid max-lg:grid-cols-12   max-lg:gap-5 lg:flex lg:flex-wrap lg: justify-between lg:gap-5'>
      {whyUs.map((item, index) => (
        <div key={index} className='lg:col-span-4 max-lg:col-span-12 max-lg: m-auto '>
          <UsButton 
            imgUrl={item.imgUrl} 
            label={item.label} 
            desc={item.Desc} 
          />
        </div>
      ))}
    </div>
</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className=' set-bg'>
  <path fill="#F3F2FF" fillOpacity="1" d="M0,96L120,133.3C240,171,480,245,720,245.3C960,245,1200,171,1320,133.3L1440,96L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path>
</svg>

    </section>
  )
}

export default WhyUs