import React from 'react'
import './style.css'
// import Vector from "./vector";
import User from '../assets/user.png'
import Logo from './logo'
import vector from '../assets/Vector.png';
import Pill from './pill'
import Button from './button'
// import Vector from "./vector";;
import { Link } from 'react-router-dom';

function Form3() {
  return (
    <div>
        <div className='registerform'>
        <div className='logo'><Logo /></div>
        <div className='navbar'>
          <div className='user1'>
          <img src={User} alt='' className='user1_pic'/>
          <span>Laurent</span>
          </div>
              <div className='side1'>
              <div className='sidechick1'>
              <Link to='/register'>
            <button className='circle0 circle7'>
            1
          </button>
            </Link>
              <span>Restaurant Info</span>
              </div>
              <div className='sidechick1'>
              <Link to='/register2'>
            <button className='circle0 circle8'>
            2
          </button>
          </Link>
              <span>Restaurant Type & Timings</span>
              </div>
              <div className='sidechick1'>
              <Link to='/register3'>
            <button className='circle0 circle9'>
            3
          </button>
          </Link>
              <span>Create your menu</span>
              </div>
          </div>
</div>



        <div className='form'>
          <Pill/>
          <div className='fields1'>
             <label>Name</label> <br />
             <input type="text" className='long ' placeholder='Menu name' required/><br/>
             <label>Price</label> <br />
             <input type="text" className='long ' placeholder='RWF'/><br/>
             <label for="myfile">Upload images(pictures or logo)</label>
             <input type="file" className="rounded myfile" name="myfile"/>
             <br/> 
             <Button/>
          </div >
          <div className="">
            {/* <Vector/> */}
      <img src={vector} alt= '' className="bkg2"/>
      </div>

        </div>
       
      </div>
    </div>
  )
}

export default Form3