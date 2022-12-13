import {Link} from 'react-router-dom'
import Pod from '../assets/spaceCapsule.jpg'
import Moon from '../assets/astronaut.jpg' 
import './TrainingStyle.css'

const Training = () => {
  return (
    <div className='training'>
        <div className='left'>
            <h1>Training</h1>
            <p>Thorough training is a neccessity when traveling to space. we offer all inclusive training for pre-flight and in-flight scenarios</p>
            <Link to='/contact'><button className='btn'>Contact</button></Link>
        </div>
        <div className='right'>
            <div className='img-contaniner'>
                <div className='image-stack top'>
                    <img src={Moon} className='img'/>
                </div>
                <div className='image-stack bottom'>
                    <img src={Pod} className='img'/>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Training