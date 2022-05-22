import React from 'react'
import Vector from "./vector";
import User from '../assets/user.png'
import Logo from './logo'
import { Link } from 'react-router-dom';

function Form() {
  return (
    <div>
         <div className='registerform'>
        <div className='logo'><Logo /></div>
        <div className='navbar'>
          <div className='user'>
          <img src={User} alt='' className='user_pic'/>
          <span>Laurent</span>
          </div>
              <div className='side'>
              <div className='sidechick'>
              <Link to='/register'>
            <button className='circle circle1'>
            1
          </button>
          </Link>
              <span>Restaurant Info</span>
              </div>
              <div className='sidechick'>
              <Link to='/register2'>
            <button className='circle circle2'>
            2
          </button>
          </Link>
              <span>Restaurant Type & Timings</span>
              </div>
              <div className='sidechick'>
              <Link to='/register3'>
            <button className='circle circle3'>
            3
          </button>
          </Link>
              <span>Create your menu</span>
              </div>
          </div>
</div>



        <div className='form'>
          <h1>Restaurant profile!  </h1>
          <div className='fields'>
             <label>Restaurant information</label> <br />
             <input type="text" className='long ' placeholder='Restaurant name' required/><br/>
             <input type="text" className='long ' placeholder='Restaurant Complete name'/><br/>
             <label>Contacts Number @ Restaurant</label> <br />
             <input type="number" className='long ' placeholder='+250 | Mobile Number'/><br/>
             <label>Restaurant Owner Details</label> <br />
             <input type="number" className='long ' placeholder='+250 | Mobile Number'/><br/>
             <input type="text" className='short shortone ' placeholder='Owner names'/>
             <input type="text" className='short shorttwo ' placeholder='Restaurant Owner detail'/><br/>
          </div >
          <Vector className="agatwiko"/>

        </div>
       
      </div>
    </div>
  )
}

export default Form