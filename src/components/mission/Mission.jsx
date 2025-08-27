import React from 'react'
import './Mission.css'
import headingimg from '../../asserts/headingimg.svg'
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaRocket } from "react-icons/fa";
import { GrLanguage } from "react-icons/gr";


 {/* <FaHandHoldingDollar />
            <FaRocket />
            <GrLanguage /> */}

const Mission = () => {
    const missionCards=[
        {
            icon: <FaHandHoldingDollar />,
            name: "Grow your buisness",
            tittle:  "Grow your buisness",
            description: "Secure your digital environment. Protect assets and boost efficiency. Focus on growth without the risk."
        },
         {
            icon: <FaRocket />,
            name: "Launch Your Business",
            tittle:  "Launch Your Business",
            description: "Start strong with the right security measures. Secure your brand from day one. Protect your growth potential"
        },
         {
            icon: <GrLanguage />,
            name: "Global Connections",
            tittle:  "Global Connections",
            description: "Expand globally with confidence. Ensure cybersecurity resilience wherever you operate. Safeguard your connections worldwide."
        }
       
    ]
  return (
    <div className='Mission'>
            <p className='paraMiss'>Our Mission <img src={headingimg} alt="" /></p>
            <p className='paraM'>Plutosec protects businesses with advanced cybersecurity solutions. We deliver services that keep your digital assets secure and your operations running smoothly. Our goal is to make your business resilient in an ever-changing cyber landscape. We help you build trust, enhance security, and grow confidently.</p>
            <div>

            <div className='missionC'>
                {missionCards.map((cat, index) => (
                    <div className='flip-cart0' key={index}>
                        <div className='flipCardInner'>
                        <div className='flipcartFront'>
                            <div className='icon0'>{cat.icon}</div>
                            <div className='name0'>{cat.name}</div>
                        </div>

                        <div className='flipcartBack'>
                            <div className='tittle0'>{cat.tittle}</div>
                            <div className='description0'>{cat.description}</div>
                        </div>
                    </div>
                    </div>
                ))}
            </div>

            </div>
        </div>

        
  )
}

export default Mission