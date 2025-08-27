import React from 'react'
import './Values.css'
import headingimg from '../../asserts/headingimg.svg'
import { GoGoal } from "react-icons/go";

const Values = () => {
  const BoxV=[
    {
      icon: <GoGoal />,
      name: "Goal Setting",
      description:  [
        "1: Define Your Goals",
        "2: plan your steps",
        "3: Track your Progress"
      ]
      // ]"1: Define Your Goals\n2: plan your steps\n 3: Track your Progress" 
    },
      {
      icon: <GoGoal />,
      name: "Teamwork",
        description:  [
      "1: Communicate clearly",
      "2: Support each other",
      "3: Share success"
      ]
      // description: "1: Communicate clearly\n2: Support each other\n3: Share success" 
    },
      {
      icon: <GoGoal />,
      name: "Innovation",
      // description: "1:Think creatively\n2:Take smart risks\n3:Learn from failure" 
       description:  [
        "1: Think creatively",
        "2: Take smart risks",
        "3: Learn from failure"
      ]
    },
      {
      icon: <GoGoal />,
      name: "Integrity",
      // description: "1:Be honest\n2: Stay accountable\n3: Build trust" 
       description:  [
       "1: Be honest",
       "2: Stay accountable",
       "3: Build trust"
      ]
    }
  ]
  return (
    <div>
        <div className='value'>
            <p className='paraVal'>Our Values <img src={headingimg} alt="" /></p>
            <p className='paraV'>Strong values build strong security. Plutosec stands on trust, speed, and clear action. You get support that never slows down. We act with purpose and always put your safety first. These values guide every step we take. That’s how we protect what matters to you.</p>
        </div>

        <div className='flip-cards-area'>
        {BoxV.map((item, index) => (
          <div className='flip-card' key={index}>
          <div className='flip-card-inner' >
            <div className='flip-card-front'>
            <div className='icon' >{item.icon}</div>
            <div className='name'> {item.name}</div>
            </div>

            <ul className='flip-card-back'>
             {item.description.map((point, index) => (
              <li className='description' key={index}>{point} </li>
             ))}
             </ul>
            </div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Values