import React, {useState} from 'react'
import  './AskQuest.css'
import headingimg from '../../asserts/headingimg.svg'
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";


const AskQuest = () => {
    const QuesCards =[
        {
        name: "What Are Penetration Services?",
        signAdd: <GoPlus />,
        TextMsg: "Penetration testing services simulate real-world cyberattacks to identify vulnerabilities in your system and improve overall security. These tests help you understand where your defenses might fail.",
        signSub: <FiMinus />
        },
        {
        name: "How Can Vulnerability Assessments Benefit My Business?",
        signAdd: <GoPlus />,
        TextMsg: "Vulnerability assessments scan your systems to identify weaknesses before attackers can exploit them. They allow you to prioritize fixes and strengthen your security posture.",
        signSub: <FiMinus />
        },
          {
        name: "What is Managed Security Monitoring?",
        signAdd: <GoPlus />,
        TextMsg: "Managed security monitoring provides continuous oversight of your IT infrastructure. This service detects potential threats and ensures quick responses to mitigate risks in real-time.",
        signSub: <FiMinus />
        },
          {
        name: "Why is Cloud Security Important for My Organization?",
        signAdd: <GoPlus />,
        TextMsg: "Cloud security ensures your data stored in the cloud is protected from unauthorized access. It focuses on safeguarding your cloud applications and services from cyber threats and vulnerabilities.",
        signSub: <FiMinus />
        },
        {
        name: "How Does Red Teaming Improve My Security?",
        signAdd: <GoPlus />,
        TextMsg: "Red teaming involves simulating advanced attacks to test your security systems. It provides insights into how well your organization responds to cyber threats and helps uncover security gaps.",
        signSub: <FiMinus />
        },
          {
        name: "What is Identity & Access Management (IAM)?",
        signAdd: <GoPlus />,
        TextMsg: "IAM controls who has access to your systems and data. It ensures that only authorized individuals can access sensitive information, reducing the risk of unauthorized access and data breaches.",
        signSub: <FiMinus />
        },
          {
        name: "How Can XDR Improve My Security Infrastructure?",
        signAdd: <GoPlus />,
        TextMsg: "XDR (Extended Detection & Response) offers integrated protection across endpoints, networks, and cloud environments. It detects threats and responds to them immediately, improving overall threat management.",
        signSub: <FiMinus />
        },
          {
        name: "What Is Compliance Consulting?",
        signAdd: <GoPlus />,
        TextMsg:"Compliance consulting helps you meet security standards and regulations. It ensures your systems align with guidelines, reducing legal and operational risks.",
        signSub: <FiMinus />
        },
          {
        name: "What is DevSecOps?",
        signAdd: <GoPlus />,
        TextMsg: "DevSecOps integrates security into the development process. It helps prevent vulnerabilities from reaching production by addressing security early on.",
        signSub: <FiMinus />
        },
          {
        name: "Why Should I Consider Cyber Security Consultancy Services?",
        signAdd: <GoPlus />,
        TextMsg: "Cybersecurity consultancy services help you identify, assess, and improve your security strategy. They provide expert guidance on how to build a stronger, more resilient digital environment.",
        signSub: <FiMinus />
        },
    ];

    const[openIndex, setOpenIndex] = useState(null);

    const toggleCard = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  
  return (
    <div >
        <div className='AskH'><p>Frequently Asked Questions</p></div>
       <div className='AskQ'>
        {QuesCards.map((point, index) => (
            <div className='ques' key={index}>
            <div className={`quesBox ${openIndex === index ? 'active' : ''}`}>
                <div className='CardFront' onClick={() => toggleCard(index)}>
                    <div className='name'>{point.name}</div>
                    <div className='signAdd'>
                        {openIndex === index ? point.signSub : point.signAdd}
                        </div>
                </div>

            {openIndex === index && (
                 <div className='CardInner'>
                    <div className='TextMsg'>{point.TextMsg}</div>
                      </div>
            )}
               </div>
             </div>   
        ))}
       </div>  
    </div>
  );
};

export default AskQuest

