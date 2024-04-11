import React from 'react'
import './Card.css';
// import portfolio1 from '../../assets/portfolio-1.png'

const Card = ({
    imgSrc,
    imgAlt,
    title,
    description
}) => {

  return (
    <div className='cardContainer'>
      <img src={imgSrc} alt={imgAlt} className='cardImg'/>
      <h2 className='cardTitle'>{title}</h2>
      <div className='cardLine'>
      <p className='cardDescription'>{description}</p>
      </div>
    </div>
  )
}

export default Card
