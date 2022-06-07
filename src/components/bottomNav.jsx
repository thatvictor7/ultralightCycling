import React from 'react'
import '../styling/bottomNav.css'
import Logo from './logo.jsx'
import SocialContact from './socialContact.jsx'

export default function BottomNav() {
    return(
        <div className='bottom-nav-container'>
            <span className='description'>
                Apidura is driving the evolution of in
                ultralight cycling and opening a new world
                of riding possibilities for passionate cyclist.
            </span>
            <div className='sections-container'>
                <div className='section'>
                    <a href='#' className='section-title'>ABOUT US</a>
                    <a href='#'>Concept</a>
                    <a href='#'>Company</a>
                    <a href='#'>Material & Design</a>
                    <a href='#'>Careers</a>
                </div>
                <div className='section'>
                    <a href='#' className='section-title'>BIKEPACKING</a>
                    <a href='#'>Ambassador</a>
                    <a href='#'>Adventures</a>
                    <a href='#'>Special Feautures</a>

                </div>
                <div className='section'>
                    <a href='#' className='section-title'>SHOP</a>
                    <a href='#'>Front Packs</a>
                    <a href='#'>Rear Packs</a>
                    <a href='#'>Frame Packs</a>
                    <a href='#'>Accessories</a>
                </div>
                <div className='section'>
                    <a href='#' className='section-title'>CONTACT US</a>
                    <a href='#'>Shipping</a>
                    <a href='#'>Customer Service</a>
                    <a href='#'>Dealers</a>
                    <a href='#'>Athlete Sponsorship</a>
                    <a href='#'>Warranty & Returns</a>
                </div>
                <div style={{width: "150px"}} className='bottom-nav-logo'>
                    <Logo size='small' />
                    <SocialContact padding={"7px"} iconSize={"1.5em"} />
                </div>
            </div>
        </div>
    )
}