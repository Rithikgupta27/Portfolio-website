import React from 'react'
import './Portfolio.css'
import Portfolio1 from '../../assets/portfolio-1.png';
import Portfolio2 from '../../assets/portfolio-2.png';
import Portfolio3 from '../../assets/portfolio-3.png';
// import Portfolio4 from '../../assets/portfolio-4.png';
// import Portfolio5 from '../../assets/portfolio-5.png';
// import Portfolio6 from '../../assets/portfolio-6.png';
import Card from '../card/Card';

const Portfolio = () => {
   const description1 = "The ePay Wallet Payment Application aims to provide a robust and user-friendly platform for managing digital transactions";
   const description2 = "This project involves building a fully functional portfolio website using React.js. The website will showcase your skills, projects, and contact us information to customer or hr.";
   const description3 = "The Automobile Service Website on MERN Stack is a comprehensive platform designed to streamline and enhance the experience of automobile owners in managing their vehicles' service needs.";
  return (
   <section id="portfolio">
    <h2 className="portfolioTitle">My Projects</h2><br/>
    <span className="worksDesc">Explore my creative side through these design and development projects.</span>
    <div className="worksContainer"> 
        
      <a href='https://github.com/Rithikgupta27/E-Wallet-Application' className='link1'> <Card imgSrc={Portfolio1} imgAlt='e-pay projects image' title='e-Wallet Application' description={description1}  className='Works'/></a>
      <a href='https://github.com/Rithikgupta27/Automobile-Service-Website' className='link1'> <Card imgSrc={Portfolio2} imgAlt='automobile website image' title='Automobile-Service website' description={description2}  className='Works'/></a> 
      <a href='https://github.com/Rithikgupta27/Portfolio-website' className='link1'>  <Card imgSrc={Portfolio3} imgAlt='portfolio project image' title='My Portfolio' description={description3}  className='Works'/></a>
        
    </div>
    <p className='sent'>To see my more project click here &rarr;
    <a href='https://github.com/Rithikgupta27?tab=repositories'><button className="workBtn">Github</button></a></p>
   </section>
  )
}

export default Portfolio