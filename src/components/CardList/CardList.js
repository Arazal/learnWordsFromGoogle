import React from 'react'

import Card  from '../Card/Card'

import classes from './CardList.css'

const CardList = ({ words }) => {

    return (
        <div className={classes.list}>
            {words.map((word, idx) => (
                <Card key={idx} word={word} />
            ))}
        </div>
    )
}

export default CardList
