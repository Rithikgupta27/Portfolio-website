import React from 'react'
import './Intro.css';
import bg from '../../assets/image.png';
// import { Link } from 'react-scroll';
// import btnImg from '../../assets/hireme.png';

const Intro = () => {
  return (
    <section id="intro">
         <div className="introContent">
          <span className='hello'>Hello,</span>
          <span className='introText'>I'm 
          <span className='introName'> Rithik</span><br />FullStack Developer</span>
          <p className='introPara'>Fresh and fired-up full-stack enthusiast with a knack for both <br/> building beautiful user interfaces and crafting powerful backend <br/>functionalities. Excited to dive into real-world projects and bring<br/> innovative ideas to life! respone websites</p>
           {/* <a href='Rithik Gupta1.0.pdf' download="Rithik_Gupta_Resume.pdf"> */} 
           {/* <button className="btn"> */}
            {/* <img src={btnImg} alt='Hire Me' className='btnImg'/> */}
           {/* Download Resume</button></a> */}
         </div>
         <img src={bg} alt='Profile' className='bg'/> 
     </section>
  )
}

export default Intro
