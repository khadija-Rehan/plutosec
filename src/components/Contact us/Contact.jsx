import React from 'react';
import './Contact.css';
import headingimg from '../../asserts/headingimg.svg';

const Contact = () => {

  const handleSubmit = () => {
    alert("Form Submitted!"); // or you can implement actual logic
  };

  return (
    <div>
      <div className="area-14">
        <div className="headingimg">
          <p>Contact Us</p>
          <img src={headingimg} alt="" />
        </div>
      </div>

      <div className="area-15">
        <div className="area15-left">
          <div className="Map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5773.150090180891!2d-79.381101!3d43.657009!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cab63b4553%3A0x55da329c904d70c!2s335%20Yonge%20St%2C%20Toronto%2C%20ON%20M5B%202L3%2C%20Canada!5e0!3m2!1sen!2sus!4v1750416960508!5m2!1sen!2sus"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            ></iframe>
          </div>
        </div>

        <div className="area15-right">
          <p className="p1">Start a conversation with us, and we'll assist you right away!</p>

          <div className="names1">
            <div className="names">
              <input id="fname" type="text" placeholder="First Name" />
              <input id="lname" type="text" placeholder="Last Name" />
            </div>

            <div className="names">
              <input id="phone" type="text" placeholder="Phone No." />
              <input id="email" type="text" placeholder="Enter Your Email" />
            </div>
          </div>

          <div className="select-sub">
            <p className='selectP'>Select Subject?</p>
            <div className="sub0">
              <div className="column0">
                <label  className='label0'>
                  <input type="checkbox" value="Penetration Testing" /> Penetration Testing
                </label>
                <label  className='label0'>
                  <input  type="checkbox" value="Cloud Security" /> Cloud Security
                </label>
              </div>

              <div className="column0">
                <label className='label0'>
                  <input  type="checkbox" value="Network Security" /> Network Security
                </label>
                <label  className='label0'>
                  <input type="checkbox" value="Managed Security" /> Managed Security
                </label>
              </div>

              <div className="column0">
                <label  className='label0'>
                  <input type="checkbox" value="Cyber Consultation" /> Cyber Consultation
                </label>
                <label  className='label0'>
                  <input  type="checkbox" value="General Inquiry" /> General Inquiry
                </label>
              </div>
            </div>
          </div>

          <div className="text0">
            <textarea id="text" placeholder="Please type your enquiry our team will get back to you..."></textarea>
          </div>

          <div className="button3">
            <p>Submit</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
