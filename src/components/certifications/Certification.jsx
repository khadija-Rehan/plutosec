import React from 'react'
import './Certification.css'
import headingimg1 from '../../asserts/headingimg.svg'
import certificate1 from '../../asserts/certificate.webp'
import certificate2 from '../../asserts/certificate2.webp'
import certificate3 from '../../asserts/certificate3.webp'
import certificate4 from '../../asserts/certificate4.webp'
const Certification = () => {
  return (
    
         <div class="front-area4">
        <div class="area4-left">
            <div class="headingimg">
                <p>Certifications</p><img src={headingimg1} alt=""/>
            </div>
            <p>PlutoSec holds top cybersecurity certifications trusted across Canada. Our team follows proven
                methods
                like NIST and ISO to deliver accurate results. Every test is guided by strong standards and expert
                skills. You get clear reports and solid protection that meet industry and government needs. We help you
                stay ahead with secure systems built on certified practices. Our experts stay updated with the latest
                compliance changes. You gain confidence knowing your security meets global benchmarks.</p>
        </div>
    
            <div class="area4-right">
            <div class="img-corner">
                <img src={certificate1} alt=""/>
                <img src={certificate2} alt=""/>
                <img src={certificate3} alt=""/>
                <img src={certificate4} alt=""/>
            </div>
        </div>
 </div>
  )
}

export default Certification