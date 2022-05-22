import React from 'react';
import logo from '../assets/yummy-logo2.png'
import './style.css'

const Logo = (props) => {
    return(
        <div>
            <img src={logo} className="logo1"alt= 'Logo'/>
        </div>
    )
}
export default Logo