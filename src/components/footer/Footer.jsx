import React from 'react'
import './Footer.css'
import plutosec1 from '../../asserts/plutosec.png'
import facebook from '../../asserts/facebook (1).png'
import linkedin from '../../asserts/linkedin.png'
import instagram from '../../asserts/instagram.png'
import tiktok from '../../asserts/tik-tok.png'
import twitter from '../../asserts/twitter.png'
import { CiMail } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { IoLocation } from "react-icons/io5";




const Footer = () => {
  return (
    <div>
          <div class="area-16">
        <div class="area16-left">
            <img src={plutosec1} alt=""/>
            <p>Defending Digital Assets-Empowering Cybersecurity Experts, and
                Shaping a Secure Future
            </p>
            <div class="images-16">
                <ul>
                    <li>
                        <img src={facebook} alt=""/>
                    </li>

                    <li>
                        <img src={linkedin} alt=""/>
                    </li>

                    <li>
                        <img src={instagram} alt=""/>
                    </li>

                    <li>
                        <img src={tiktok} alt=""/>
                    </li>

                    <li>
                        <img src={twitter} alt=""/>
                    </li>
                </ul>
            </div>
        </div>


        <div class="center-16">
            <p>Company</p>
            <ul>
                <li>Services</li>
                <li> Blogs</li>
                <li>Industries</li>
                <li> Testimonials</li>
                <li> Career</li>
                <li> Contact Us</li>
            </ul>
        </div>




        <div class="center-16">
            <p>Others</p>
            <ul>
                <li>Success Stories</li>
                <li>Partner Program</li>
                <li>Why Us</li>
                <li> Terms & Condition</li>
                <li>Privacy Policy</li>
                <li>Abous Us</li>
            </ul>

        </div>


        <div class="right-16">
            <p class="heading">Join a Newsletter</p>
            <p class="email">Your Email</p>

            <div class="same-line">
                <input type="text" placeholder="Enter your email"/>
                <div class="button4">Subscribe</div>
            </div>

            <div class="icons-16">
                <ul>
                    <li>
                       <p className='mail'><CiMail /></p> 
                        <span> contact@plutosec.ca</span>
                    </li>

                    <li>
                        <p className='call'><IoCallOutline /></p>
                        <span>+1(905)367-6038</span>
                    </li>

                    <li>
                       <p className='location'><IoLocation /></p>
                        <span>201A-23 Westmore Dr.Etobicoke ON M9V 3Y7</span>
                    </li>
                </ul>
            </div>

        </div>
    </div>

    <div class="footer">
        <p>Copyright @ 2021-2025 PlutoSec.ca All right reserved</p>
    </div>
    </div>

  )
}

export default Footer