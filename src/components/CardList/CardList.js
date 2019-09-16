import React from 'react'

import Card  from '../Card/Card'

import './CardList.css'

const CardList = ({ words }) => {
    console.log(words)
    return (
        <div className='list'>
            {words.map((word, idx) => (
                <Card key={idx} word={word} />
            ))}
        </div>
    )
}

export default CardList
