import React from 'react'
import './ContactP.css'
import BreadCrum from '../../components/Bread Crum/BreadCrum'
import Contact from '../../components/Contact us/Contact'
import AskQuest from '../../components/Ask ques/AskQuest'

const ContactP = () => {
  return (
    
        <div> <BreadCrum title={"Contact"}/>
        <div>
            <p className='Chead'>Contact Us</p>
            <p className='Cpara'>You can contact Plutosec when you need fast and expert support. Our team helps you understand the next steps and answers your questions without delay. We guide you with honest advice and strong solutions. Start the conversation today and protect what matters most.</p>
               <div> <Contact/></div>
               <div><AskQuest/></div>
        </div>
        </div>

    
  )
}

export default ContactP