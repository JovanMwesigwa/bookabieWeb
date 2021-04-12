import React  from 'react'
import { HamContainer } from './HamburgerElements'
import { FaTimes, FaBars } from 'react-icons/fa'

function HamburgerComponent({ onClick, pressed, scrollNav, }) {

    return (
        <HamContainer onClick={onClick}>

            {
                pressed ? 
                <FaTimes color='#373463' size={25} />: 
                <FaBars color='#373463' size={25} /> 
            }
            
        </HamContainer>
    )
}

export default HamburgerComponent
