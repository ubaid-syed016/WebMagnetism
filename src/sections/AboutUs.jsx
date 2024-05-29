import React from 'react'
import Button from '../Components/Button'
import About from '../../Images/ABoutSection.jpg'
const AboutUs = () => {
  return (
    <section className=' overflow-hidden padding grid   grid-cols-12 md:gap-7 max-md:gap-7'>
        <div className=' lg:col-span-6 h-auto md:col-span-12 max-md:col-span-12 '>
            <h1 className=' text-3xl   font-inter   font-medium max-sm:font-semibold set-space max-sm:text-[18px] '>Welcome To Web Magnetism</h1>
            <p className='  font-inter mt-4  text-text-color text-[17px] max-sm:text-[16px]'>Your hub for bespoke web design and digital marketing success. We seamlessly merge creativity and SEO expertise to craft visually stunning websites that magnetize audiences.</p>
            <p className='  font-inter mt-2  text-text-color text-[17px] max-sm:text-[16px]'>Our digital marketing, from SEO mastery to impactful campaigns, ensures your brand's resonance online. At Web Magnetism, we're not just designers; <span className=' font-[500]'>we're digital architects,</span> sculpting unique online experiences that elevate your brand.</p>
            <p className='  pb-6 font-inter mt-2  text-text-color text-[17px] max-sm:text-[16px] max-sm:pb-8 text-wrap'>Navigate the digital landscape with confidence – choose Web Magnetism for tailored web design and <span className=' font-[500]'>strategic digital marketing,</span> where innovation meets results for a compelling online journey.</p>
             <a href="/" >
              <Button buttonText={"ABOUT US"} />
              </a>
        </div>
        <div className='lg:col-span-6 max-md:col-span-12 max-md: justify-center  max-md:items-center md:col-span-12 h-auto  flex items-center lg:justify-end md:justify-center'>
<img src={About} alt="" className=' h-[300px] set-img   object-cover max-sm:object-fill' />
        </div>
    </section>
  )
}

export default AboutUs