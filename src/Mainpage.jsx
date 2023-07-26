import React from 'react'
import Home from './Components/Home'
import Features from './Components/Features'
import hero from '../src/assets/hero4.png'
import saveMoney from '../src/assets/hero3.png'
import Installation from './Components/Installation'
import Review from './Components/Review'
import Pricing from './Components/Pricing'
import Download from './Components/Download'
import Contact from './Components/Contact'
import UPbtn from './Components/UPbtn'
const Mainpage = () => {
  return (
   <>
   <Home flex="flex-row"
   Heading="Awesome App for Your Financial."
   desc="This should be used to tell a story and let your users know a little more about app and it’s use, How can benefit them."
   title="Downlaod App"
   Image={hero} />

    <Features/>

   <Home flex="flex-row-reverse" 
   Heading="Best Financing App To Save Your Money"
   SubHeading="Saving Money"
   desc="Best financing app ever in the world. Easy to use and very user friendly for mobile banking. You can control your card easily and send money some one just one click."
   title="Read More"
   Image={saveMoney}/>
    <Installation/>
    <Review/>
    <Pricing/>
    <Download/>
    <Contact/>
    <UPbtn/>
   </>
  )
}

export default Mainpage