import React from 'react';
import './Skills.css';
import UIDesign from '../../assets/ui-design.png';
// import WebDesign from '../../assets/website-design.png';

const Skills = () => {
  return (
   <section id="skills">
     <span className="skillTitle">What I do</span><br/>
     <span className="skillDesc">I am Enthusiastic full-stack developer with a keen understanding of both frontend and backend development principles. Eager to apply my skills in creating seamless user experiences and robust server-side functionalities to contribute effectively to dynamic development projects.</span>
      <div className="skillBars">
          <div className="skillBar">  
          <img src={UIDesign} alt='' className='skillBarImg'/>
            <div className="skillBarText">
                <h2>Programing Languages</h2>
                <p>Equipped with a versatile skill set, I am proficient in programming languages such as <span className='tech'>C++</span>, <span className='tech'>Java</span>, <span className='tech'>C#</span>, and <span className='tech'> DSA using Java</span>.</p>
            </div>
           </div>
        <div className="skillBar">
            <img src={UIDesign} alt='' className='skillBarImg'/>
            <div className="skillBarText">
                <h2>Frontend Technology</h2>
                <p>I specialize in UI/UX development using a tech stack including <span className='tech'> HTML/CSS</span>, <span className='tech'>React.js</span>, and<span className='tech'> JavaScript</span> . </p>
            </div>
          </div>
           <div className="skillBar"> 
            <img src={UIDesign} alt='' className='skillBarImg'/>
            <div className="skillBarText">
                <h2>Backend Technology</h2>
                <p>I utilize <span className='tech'>Node.js</span>, <span className='tech'>Express.js</span>, <span className='tech'>Spring Boot</span>, 
                <span className='tech'> Spring Framework</span>, and <span className='tech'>ASP.NET MVC</span> to architect resilient server-side solutions. From crafting RESTful APIs to managing databases, I bring versatility and expertise to every project.</p>
            </div>
        </div>
      </div>
   </section>
   
  )
}

export default Skills
