import React from 'react'
import './card.css'
const Card = ({name, photoUrl}) => {
  return (
    <div className="card">
      <img  src={photoUrl} alt={name} className="card-photo" />
      <div className="card-overlay">
        <p className="card-name">{name}</p>
      </div>
    </div>
  )
}

export default Card