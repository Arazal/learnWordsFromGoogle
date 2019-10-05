import React from 'react'

import './NavigationItems.css'
import NavigationItem from './NavigationItem/Navigationitem' 

const NavigationItems = () => {
    return (
       <ul className='NavigationItems'>
           <NavigationItem link='/' active>Add words</NavigationItem>
           <NavigationItem link='/'>About</NavigationItem>
       </ul>
    )
}

export default NavigationItems
