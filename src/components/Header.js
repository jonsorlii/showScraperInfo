import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title }) => {
    const onClick = () => {
        console.log('CLICK')
    }
    return (
        <header className = 'header'>
            <h1>{title}</h1> 
            <Button color = 'green' text = 'Log in' onClick = {onClick} /> 
        </header>
    )
}



Header.defaultProps = {
    title : 'Aksjescanner'
}

Header.propTypes = {
    title : PropTypes.string.isRequired, 
}

export default Header
