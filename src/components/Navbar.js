import React, {useState} from 'react'
import {
    Nav,
    NavLink, 
    Bars,
    NavMenu, 
    NavBtn, 
    NavBtnLink,
} from './NavbarElements';


const Navbar = () => {
    return (
        <>
            <Nav>
                <Bars />
                <NavMenu>
                    <NavLink to = './'> 
                        Home
                    </NavLink>
                    <NavLink to = './Ticker'>
                        Ticker
                    </NavLink>
                    <NavLink to = './EditTicker'>
                        Edit tickers
                    </NavLink>
                </NavMenu>
            </Nav>
        </> 
    )
}

export default Navbar
