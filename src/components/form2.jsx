import React from 'react'
import './style.css'
// import Vector from "./vector";
import User from '../assets/user.png'
import Logo from './logo'
import vector from '../assets/Vector.png';
import { Link } from 'react-router-dom';

function Form2() {
  return (
    <div>  <div className='registerform'>
    <div className='logo'><Logo /></div>
    <div className='navbar'>
      <div className='user'>
      <img src={User} alt='' className='user_pic'/>
      <span>Laurent</span>
      </div>
          <div className='side'>
          <div className='sidechick'>
            <Link to='/register'>
            <button className='circle circle4'>
            1
          </button>
            </Link>
          <span>Restaurant Info</span>
          </div>
          <div className='sidechick'>
            <Link to='/register2'>
            <button className='circle circle5'>
            2
          </button>
            </Link>
          <span>Restaurant Type & Timings</span>
          </div>
          <div className='sidechick'>
          <Link to='/register3'>
            <button className='circle circle6'>
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
         <label>Restaurant Type(restaurant, pub, hotel, coffeeshop, other)</label> <br />
         <select>
             <option value="restaurant" selected>Restaurant</option>
             <option value="pub">Pub</option>
             <option value="hotel">Hotel</option>
             <option value="coffeeshop">CoffeeShop</option>
             <option value="other">Other</option>
         </select>
         <br/>
         <select>
             <option value="restaurant" selected>African</option>
             <option value="pub">Asian</option>
             <option value="hotel">American</option>
             <option value="coffeeshop">European</option>
             <option value="other">Other</option>
         </select>
         <br/>
         <label>Opening Hours</label><br/>
         <input type="text" className='short shortone ' placeholder='From | 14:00'/>
         <input type="text" className='short shorttwo ' placeholder='To | 2:00'/><br/>
         <label for="myfile">Upload images(pictures or logo)</label>
         <input type="file" className="rounded myfile" name="myfile"/>
         <br/> 
      </div >
      <div className="">
      <img src={vector} alt= '' className="bkg1"/>
      </div>
    </div>
   
  </div></div>
  )
}

export default Form2