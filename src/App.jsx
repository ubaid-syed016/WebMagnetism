import React from 'react'
import Layout from './Components/Layout/Layout'
import Hero from './sections/Hero'
import AboutUs from './sections/AboutUs'
import DigitalMarket from './sections/DigitalMarket'
import WhyUs from './sections/WhyUs'
import BespokeContent from './sections/BespokeContent'
import Service from './sections/Service'
import LogoDisplay from './sections/LogoDisplay'
import WorkShowCase from './sections/WorkShowCase'

const App = () => {
  return (
    <Layout>
      <section>
        <Hero/>
      </section>
      <section>
        <AboutUs/>
      </section>
      <section>
       <DigitalMarket/>
      </section>
      <section>
        <WhyUs/>
      </section>
      <section>
        <BespokeContent/>
      </section>
      <section>
        <Service/>
      </section>
      <section>
        <LogoDisplay/>
      </section>
      <section>
        <WorkShowCase/>
      </section>
    </Layout>
  )
}

export default App