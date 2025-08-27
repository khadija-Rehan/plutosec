import React from 'react'
import './Follow.css'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Follow = () => {
  return (
    <div className='Follow'>
        <p>Follow Us</p>
        <div className='icons'>
            <ul>
                <li>
                     <FaFacebookF/>
                </li>

                <li>
                     <FaLinkedinIn/>
                </li>

                <li>
                     <FaSquareInstagram/>
                </li>

                <li>
                   <FaTiktok />
                </li>

                <li>
                     <BsTwitterX />
                </li>
            </ul>
        </div>
        <div className='para'>Subscribe to our newsletter and receive a selection of cool articles every week.</div>
        <div className='email'><input type="text" placeholder='Enter your Email'/></div>
        <div className='check'><input type="checkbox" />I agree to the terms of use for storing my submitted data.</div>
        <div className='subscribe'>Subscribe</div>
    </div>
  )                             
}

export default Follow