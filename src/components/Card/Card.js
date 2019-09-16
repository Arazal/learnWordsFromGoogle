import React from 'react'

import './Card.css'

const Card = ({ word }) => {
    return (
//<div className="wrap"> 
  <div className="card">
    <div className="front"><span>{word[2]}</span></div>
    <div className="back"><span>{word[3]}</span></div>
  </div>
// </div>
)
}

export default Card
