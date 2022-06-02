import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram, FaTiktok } from 'react-icons/fa'
import '../styling/socialContact.css'

export default function SocialContact(props) {
    return (
        <div style={{paddingTop: props.padding}} className='social-container'>
            <FaFacebookF size={props.iconSize} />
            <FaTwitter size={props.iconSize} />
            <FaInstagram size={props.iconSize} />
            <FaTiktok size={props.iconSize} />
        </div>
    )
}