import React from "react";
import './Cybersecurity.css'
import headingimg from '../../asserts/headingimg.svg'
import { FaArrowRightLong } from "react-icons/fa6";

const Cybersecurity=()=>{
    return(
         <div class="front-area2">
        <div class="front-left2">
            <div class="headingimg">
                <p>Our Cybersecurity Services</p> <img src={headingimg} alt=""/>
            </div>
            <p>PlutoSec offers a range of cybersecurity solutions to protect your organization from evolving threats.
                Our services are designed to strengthen your security across multiple platforms.</p>
        </div>

        <div class="front-right2">
            <p>View All <FaArrowRightLong/></p>

        </div>
    </div>
    );
}

export default Cybersecurity;