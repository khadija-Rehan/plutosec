import React from 'react'
import './Why.css'
import headingimg2 from '../../asserts/headingimg.svg'
import choose from '../../asserts/choose.svg'
const Why = () => {
  return (
    <div><div class="front-area5">
        <div class="area5-left">
            <div class="headingimg">
                <p>Why Us?</p> <img src={headingimg2} alt=""/>
            </div>
            <p>PlutoSec leads cybersecurity in Canada and is trusted by businesses in Toronto, Vancouver, Montreal, and
                more. Our expert team provides advanced penetration testing customized to meet your needs and industry
                standards. We take a consultative approach, ensuring you fully understand each evaluation and gain
                actionable insights. We improve your security with precision and lasting results by following trusted
                frameworks like NIST and ISO.</p>
        </div>

        <div class="area5-right">
            <img src={choose} alt=""/>
        </div>
    </div>
    </div>
  )
}

export default Why