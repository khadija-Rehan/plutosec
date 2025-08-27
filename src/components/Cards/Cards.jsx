import React from 'react'
import box1 from '../../asserts/box1.png'
import box2 from '../../asserts/box2.png'
import box3 from '../../asserts/box3.png'
import box4 from '../../asserts/box4.png'
import box5 from '../../asserts/box5.png'
import box6 from '../../asserts/box6.png'
import box7 from '../../asserts/box7.png'
import box8 from '../../asserts/box8.png'
import box9 from '../../asserts/box9.png'
import './Cards.css'
const Cards = () => {
    const Cards0=[
    {
        img: box1,
        title: "Pentest Services",
        description: "We simulate real attacks to discover vulnerabilities and help strengthen your overall security posture effectively.",
        buttonText: "Learn More"
    },
    {
        img: box2,
        title: "Managed Security Services",
        description: "We manage your entire security infrastructure continuously, preventing, detecting, and responding to threats in real time.",
        buttonText: "Learn More"
    },
    {
        img: box3,
        title: "Red Teaming | Blue Teaming",
        description: "We test and measure your security readiness through adversarial simulations and defensive strategies.",
        buttonText: "Learn More"
    },
    {
        img: box4,
        title: "Cloud Security Solutions",
        description: "We secure your cloud platforms using intelligent controls, continuous monitoring, and robust configuration management tools.",
        buttonText: "Learn More"
    },
    {
        img: box5,
        title: "Extended Detection & Response (XDR)",
        description: "Our advanced XDR detects and responds to threats across endpoints, networks, and cloud environments instantly.",
        buttonText: "Learn More"
    },
    {
        img: box6,
        title: "Vulnerability Assessment Services",
        description: "We scan and assess systems for vulnerabilities. It helps prioritize fixes before attackers can exploit them.",
        buttonText: "Learn More"
    },
    {
        img: box7,
        title: "Identity & Access Management",
        description: "We protect your systems by controlling user access. Strict identity verification and authentication reduce risk.",
        buttonText: "Learn More"
    },
     {
        img: box8,
        title: "Compliance Consulting",
        description: "We guide you through security standards. Our expert consulting ensures compliance and helps you achieve certifications",
        buttonText: "Learn More"
    },
    {
        img: box9,
        title: "DevSecOps",
        description: "We embed security throughout development, operations, and delivery pipelines. This prevents vulnerabilities from reaching production.",
        buttonText: "Learn More"
    }


];

  return (
    <div className="front-area3">
        <div className="box-left1">
           {Cards0.map((item, index) => (
            <div className='box1' key={index}>
                <img src={item.img} alt="" />
                <p className='p1'>{item.title}</p>
                <p className='p2'>{item.description}</p>
                <div className='button1'>{item.buttonText}</div>
            </div>

            ))}
       
 </div>
    </div>
  )}
export default Cards