import React from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact(){
    return(
    
    <div id='contact'>
    <div style={{ display: 'flex' }} className='container'>
      
    <div style={{ flex: 1 }} className='map-container'>
      <h1>Get in <br/> Touch</h1>
      <div className="contact-info">
          <div className='hi'>
            <FontAwesomeIcon icon={faEnvelope} />
            <span>&nbsp;&nbsp;<span className="up">ADDRESS</span><br/><span className='down'>example@example.com</span></span>
          </div>

          <div className='hi'>
            <FontAwesomeIcon icon={faPhone} />
            <span>&nbsp;&nbsp;<span className="up">PHONE</span><br/><span className='down'>+1 (123) 456-7890</span></span>
          </div>

          <div className='hi'>
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span>&nbsp;&nbsp;<span className="up">MAIL</span><br/><span className='down'>123 Main Street, India</span></span>
          </div>
        </div>
    </div>

    <div style={{ flex: 1, padding: '20px' }} className='form-container'>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='Your Name...'/>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder='Your Email...'/>
        </div>

        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" placeholder='Your Message...'/>
        </div>

        <div>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </div>

  </div>
  </div>
    );
}

export default Contact;