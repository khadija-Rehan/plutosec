import React from 'react'
import person1 from '../../asserts/person1.jpg'
import person2 from '../../asserts/person2.jpg'
import person3 from '../../asserts/person3.jpg'
import { FaQuoteLeft } from "react-icons/fa";

import './CardTest.css'
const Cardtest = () => {
    const Cards=[
        {
            img: person1,
            para1:"As a System Administrator, I value precision and speed—PlutoSec delivered both. Their structured reports and quick threat mitigation helped us maintain uptime without compromise",
            para2: "System Administrator",
            para3: "Tessa Martel"
        },
        {
            img: person2,
            para1:"Managing IT operations at scale requires trustworthy security partners. PlutoSec enhanced our infrastructure’s resilience with clear processes, responsive support, and proactive defenses.",
            para2: "System Administrator",
            para3: "Rohan Sharma"
        },
        {
            img: person3,
            para1:"In my role as CTO, compliance and data protection are top priorities. PlutoSec brought clarity to complex healthcare standards and executed a secure, scalable solution.",
            para2: "CTO",
            para3: "Charlotte Tremblay"
        }
    ];
  return (
    <div className="area-11">
        {Cards.map((item, index) => (
        <div className='area-box1' key={index}> 
        <div className='img1'>
        <img src={item.img} alt="" />
        </div>
   <p className='quote'><FaQuoteLeft /></p> 
        <div className='text'>
         
            <p className='para1'>{item.para1}</p>
        <div className="bottom-line"></div>
            <div className='paras'>
            <p className='para2'> {item.para2}</p>
            <p className='para3'> {item.para3}</p>
            </div>
        </div>
        </div>
        ))}
       
    </div>

  )
}

export default Cardtest