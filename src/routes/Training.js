import React from 'react'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'
import TrainingSection from '../components/Training'

const Training = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading='TRAINING' text='Pre-Flight & In-Flight Senarios'/>
        <TrainingSection/>
        <Footer/>
    </div>
  )
}

export default Training