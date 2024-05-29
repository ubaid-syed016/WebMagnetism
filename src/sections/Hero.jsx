import React from 'react'
import '../style/Hero.css'
import Button from '../Components/Button'
import Wave from '../../Images/waves.jpg'
const Hero = () => {
  return (
    <section className='wave-container  overflow-hidden flex flex-col  items-center relative'>
        <p className=' font-inter text-center  whitespace-nowrap text-white text-5xl max-sm:text-2xl  font-bold'>WEB MAGNETISIM</p>
        <p className=' flex flex-col max-sm:w-[310px] sm:w-[400px] text-white text-center max-sm:whitespace-pre-wrap max-sm:text-[15px] font-inter font-light text-sm pt-4 '>
            Transforming Businesses With Unique Web Design And
        Strategic Digital Marketing For Impactful Online Visibility.
        </p>
        <a href='/' className=' pt-3 pb-7'> 
              <Button buttonText="GET A PROPOSAL" borderbtn={true}/>
              </a>
              {/* <img src={Wave} alt="" className=' absolute' /> */}
    </section>
  )
}

export default Hero