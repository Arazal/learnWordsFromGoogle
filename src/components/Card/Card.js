import React from 'react'

import classes from './Card.css'

const Card = ({ word }) => {

  console.log(word)
    return (
//<div className="wrap"> 
  <div className={classes.Card}>
    <div className={classes.Front}><span><h3>{word[2]}</h3></span></div>
    <div className={classes.Back}><span><h3>{word[3]}</h3></span></div>
  </div>
// </div>
)
}

export default Card
