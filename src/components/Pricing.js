import React from 'react';
import './PricingStyle.css';
import {Link} from 'react-router-dom';

const Pricing = () => {
  return (
    <div className='pricing'>
        <div className='card-container'>
            <div className='card'>
                <h3>- Basic -</h3>
                <span className='bar'></span>
                <p className='btc'>1 BTC</p>
                <p>-3 Days-</p>
                <p>-Moon-</p>
                <p>-Silver-Suite-</p>
                <p>-Delux-</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- Suite -</h3>
                <span className='bar'></span>
                <p className='btc'>10 BTC</p>
                <p>-10 Days-</p>
                <p>-Moon-Mars-</p>
                <p>-Gold-Suite-</p>
                <p>-Super-Delux-</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
            <div className='card'>
                <h3>- Executive -</h3>
                <span className='bar'></span>
                <p className='btc'>100 BTC</p>
                <p>-30 Days-</p>
                <p>-Moon-Jupiter-</p>
                <p>-Platinum-Suite-</p>
                <p>-Opulent-</p>
                <Link to='/contact' className='btn'>Book</Link>
            </div>
        </div>
    </div>
  )
}

export default Pricing