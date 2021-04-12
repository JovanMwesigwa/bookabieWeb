import React  from 'react'
import { HamContainer } from './HamburgerElements'
import { FaTimes, FaBars } from 'react-icons/fa'

function HamburgerComponent({ onClick, pressed }) {

    return (
        <HamContainer onClick={onClick}>

            {
                pressed ? 
                <FaTimes color="#fff" size={25} />: 
                <FaBars color="#fff" size={25} /> 
            }
            
        </HamContainer>
    )
}

export default HamburgerComponent
