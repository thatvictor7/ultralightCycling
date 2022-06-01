import React from 'react'
import '../styling/logo.css'
import LogoImage from '../assets/beeLogo.png'

export default function Logo(props) {
    switch (props.size) {
        case 'small':
            return(
                <div className='logo-container'>
                    <img className='image' src={LogoImage} />
                    <span>APIDURA</span>
                </div>
            )
            break;
        case 'extra-small':
            return(
                <div className='logo-container'>
                    <img className='image-xs' src={LogoImage} />
                    <span>APIDURA</span>
                </div>
            )
        default:
            return(
                <div>
                    normal
                </div>
            )
            break;
    }
}