import React from 'react'
import Button from '../Components/Button'
import { Link } from 'react-router-dom'
import CustomSlider from '../Components/CustomSlider'

const WorkShowCase = () => {
  return (
    <section className=' py-[50px] padding-x'>
        <div className=' flex sm:justify-between max-sm:flex-col max-sm:items-center max-sm: gap-3 max-sm: justify-center sm:items-end pb-3'>
            <div>
            <h1 className=' font-inter font-medium text-[30px] max-sm:text-[20px] pb-3 '>Our Work</h1>
           <p className=' text-text-color text-[14px] sm:w-[350px] max-sm:w-auto'>We don’t claim to be gurus or wizards. We’re just a super experienced, passionate team who knows how to get results for our clients. All our work is custom and thoughtfully designed, written, and developed with your business goals in mind.</p>
           </div>
           <div>
            <a href="">
            <Button   buttonText={"VIEW FULL PORTFOLIO"}/>
          </a>
           </div>
        </div>
        {/* <CustomSlider/> */}
    </section>
  )
}

export default WorkShowCase