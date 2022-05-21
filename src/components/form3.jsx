import React from 'react'
import './style.css'
// import Vector from "./vector";
import User from '../images/user.png'
import Logo from './logo'
import vector from '../images/Vector.png';
import Pill from './pill'
import Button from './button'
// import Vector from "./vector";;

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
              <button className='circle0 circle7'>
                1
              </button>
              <span>Restaurant Info</span>
              </div>
              <div className='sidechick1'>
              <button className='circle0 circle8'>
                2
              </button>
              <span>Restaurant Type & Timings</span>
              </div>
              <div className='sidechick1'>
              <button className='circle0 circle9'>
                3
              </button>
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