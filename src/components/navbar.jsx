import './navbar.css'
import React from 'react'
import logo from '../assets/beeLogo.png'

export default function Navbar() {
    return(
        <div className='nav'>
            <div className='logo side-padding'>
                <img className='logo-image' src={logo} alt='logo' />
            </div>
            <div>
                <a href='links'>ABOUT US</a>
                {/* <span className='side-padding'>BIKEPACKING</span> */}
                <a href='links' className='side-padding'>BIKEPACKING</a>
                <a href='links'>SHOP</a>
            </div>
            <div className='cart-social side-padding'>
                <div className='cart-container'>
                    <span>$3.50</span>
                    <span>1 item(s)</span>
                </div>
                <div className='social-container'>
                    <span className='hex'>h</span>
                    <span className='hex'>d</span>
                    <span className='hex'>f</span>
                    <span className='hex'>g</span>
                </div>
            </div>
        </div>
    )
}