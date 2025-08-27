import React from 'react'
import './Careers.css'
import BreadCrum from '../../components/Bread Crum/BreadCrum'
const Careers = () => {
  return (
    <div>
        <div>
          <BreadCrum title={"Careers"}/>
          <div className='join'>Join Our Journey of Plutosec</div>
          <div className='paraJ'>Be part of a growing cybersecurity team committed to protecting businesses. We prioritize innovation, teamwork, and personal growth. At Plutosec, you’ll face new challenges and sharpen your skills. Our mission is to stay ahead of cyber threats and deliver outstanding security solutions. Join us and contribute to a safer digital world. Your expertise and passion will make an impact.</div>
          <div className ="form"> 
            <div className='formL'>
              <p className='apply'>Apply Now</p>  
               <p className='Ready'>Ready to Take the Next Step?</p>  
               <p className='Fill'>Fill out the form below and take the first step toward an exciting career with us. Let's build the future together!</p>
               <div className='input01'>
                <label className='Resume'>Name</label>
                <input className='inputC0' type="text" placeholder='Name' />

                 <label className='Resume'>Job Title</label>
                <input  className='inputC0' type="text" placeholder='Job title' />

                 <label className='Resume'>Email Address</label>
                <input  className='inputC0' type="text" placeholder='Email Address' />

                 <label className='Resume'>Phone Number</label>
                <input  className='inputC0' type="text" placeholder='Phone Number' />

                <div>
                 <label className='Resume'>Upload Resume</label>
                <div className='borderD' >
                     <p>Upload Doc or PDF</p>
                    <p>Click here to choose file</p>
                </div>
                </div>

                <div className='send'><p>Send</p></div>
               </div>
            </div>
            <div className='formR'>

            </div>
          </div>
        </div>
    </div>
  )
}

export default Careers