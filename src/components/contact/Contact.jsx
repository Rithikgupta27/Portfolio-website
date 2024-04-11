import React, { useRef } from 'react'
import './Contact.css';
import LinkedInIcon from '../../assets/linkedin.png';
// import InstagramIcon from '../../assets/instagram.png';
import TwitterIcon from '../../assets/twitter.png';
import GithubIcon from '../../assets/github.png';
import GmailIcon from '../../assets/gmail.png';
import emailjs from '@emailjs/browser'
const Contact = () => {
  const githubLink = 'https://github.com/Rithikgupta27?tab=repositories';
  const linkdInLink= 'https://www.linkedin.com/in/rithik-gupta/';
  const twitterLink='https://twitter.com/its_rg_twits';
  const gmailLink ='mailto:rithikg2700@gmail.com';
  const form = useRef();
  const sendEmail = (e) => {
    
    e.preventDefault();

    emailjs
      .sendForm('service_tqnjgq6', 'template_ii4vpin', form.current, {
        publicKey: 'TIABKEIpWE0YHCXKv',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
          alert("Email sent");
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <section id="contactPage">
        <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
        <form ref={form} className='contactForm' onSubmit={sendEmail} >
            <input type="text" className="name" placeholder='Your Name' name='from_name' required/>
            <input type="email" className="email" placeholder='Your Email' name='from_email' required/>
            <textarea name="message" rows="5" className='msg' placeholder='Your Message' required></textarea><br/>
            <button type='submit' value='send' className='submitBtn'>Submit</button>

            <div className="links">
           

         <a href={twitterLink}><img src={TwitterIcon} alt="twitter icon" className="link" /></a>
         <a href={linkdInLink}><img src={LinkedInIcon} alt="linkedIn icon" className="linkedin" /></a>
            {/* <img src={InstagramIcon} alt="Instagram icon" className="link" /> */}
            <a href={githubLink}><img src={GithubIcon} alt="github icon" className="github" /></a>
            <a href={gmailLink}><img src={GmailIcon} alt='email icon' className='gmail'/></a>

            </div>
        </form>
        </div>
    </section>
  )
}

export default Contact
