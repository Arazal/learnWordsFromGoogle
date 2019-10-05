import React from 'react'

import './Toolbar.scss'
import NavigationItems from '../NavigationItems/NavigationItems'

const Toolbar = (props) => (
    <header className='Toolbar'>
        <div>Menu</div>
        <div>LOGO</div>
        <nav>
            <NavigationItems />
        </nav>        
    </header>
)   

export default Toolbar
