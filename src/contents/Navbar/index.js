import React, { useState } from 'react';
import { 
    NavbarContainer, NavLink,  NavLinkContainer,  
    NavLinksContainer, NavLinkWrapper, NavLogo, 
    NavbarContent, NavLogoContainer, NavLogoImage, Logo 
} from './NavbarElements'
import SideBarComponent from '../../components/SideBar/'
import HamburgerComponent from '../../components/Hamburger';

import logo from '../../assets/logo.png'


function NavBar() {

    const [ isOpened, setIsOpened ] = useState(false)

    const toggle = () => {
        setIsOpened(!isOpened)
    }
    return (
        <>
            <NavbarContainer pressed={isOpened} >
                <NavbarContent>
                    <NavLogoContainer>
                        <NavLogoImage>
                            <Logo src={logo} alt="bookabie" />
                        </NavLogoImage>
                        <NavLogo>Bookabie</NavLogo>
                    </NavLogoContainer>

                    <SideBarComponent pressed={isOpened} onClick={toggle} />

                    <NavLinksContainer >
                        <NavLinkWrapper>
                            <NavLinkContainer>
                                <NavLink to='about'>ABOUT</NavLink>
                            </NavLinkContainer>
                            <NavLinkContainer>
                                <NavLink to='join' >JOIN</NavLink>
                            </NavLinkContainer>
                            <NavLinkContainer>
                                <NavLink to='contact'>CONTACT</NavLink>
                            </NavLinkContainer>
                        </NavLinkWrapper>
                    </NavLinksContainer>
                        <HamburgerComponent pressed={isOpened} onClick={toggle} />
                </NavbarContent>
            </NavbarContainer>   
        </>
    )
}

export default NavBar
