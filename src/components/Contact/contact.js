import React, { useRef } from 'react'
import './contact.css'
import facebookicon from '../../assets/facebook-icon.png'
import twittericon from '../../assets/twitter.png'
import youtubeicon from '../../assets/youtube.png'
import instagramicon from '../../assets/instagram.png'
// import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_8vlm52h', 'template_xgfgjaw', form.current, 'OvTbkQdH5cP1RbGfspnV5')
          .then((result) => {
              console.log(result.text);
              alert('email sent')
          }, (error) => {
              console.log(error.text);
          });
      };    
    return (
        <section id='contactPage'>
            <div id='contact'>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactdisc'>This is discription to our contact form you can fell free to get touch with me</span>
            <form className='contactform' ref={form} onSubmit={sendEmail}>
                <input type='text' className='name' placeholder='Your Name' name='from_name'></input>
                <input type='email' className='email' placeholder='Your Email' name='your_name'></input>
                <textarea   name='message' rows="5" placeholder='Your Message' className='msg'></textarea>
                <button type='submit' value='Send' className='submitbtn'>Submit</button>
                <div className='links'>
                    <img src={facebookicon} alt='Icon' className='link'></img>
                    <img src={instagramicon} alt='Icon' className='link'></img>
                    <img src={twittericon} alt='Icon' className='link'></img>
                    <img src={youtubeicon} alt='Icon' className='link'></img>
                </div>
            </form>
            </div>
        </section>
    )
}

export default Contact