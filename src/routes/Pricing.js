import React from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Heroimage from '../components/Heroimage';
import PricingCards from '../components/Pricing';

const Pricing = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading='PRICIING' text='CHOOSE YOUR TRIP'/>
        <PricingCards/>
        <Footer/>
    </div>
  )
}

export default Pricing