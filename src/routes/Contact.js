import React from 'react'
import Form from '../components/Form'
import Footer from '../components/Footer'
import Heroimage from '../components/Heroimage'
import Navbar from '../components/Navbar'

const Contact = () => {
  return (
    <div>
        <Navbar/>
        <Heroimage heading='CONTACT' text='Reach us' />
        <Form/>
         <Footer/>
    </div>
  )
}

export default Contact