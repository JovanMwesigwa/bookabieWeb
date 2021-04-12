import React from 'react'
import { SidebarContainer, NavLink, NavLinkContainer,  NavLinksWrapper } from './SidebarElements'

function SideBarComponent({onClick, pressed }) {
    return (
        <>
            <SidebarContainer onClick={onClick} pressed={pressed}>
                <NavLinksWrapper>
                    <NavLinkContainer>
                        <NavLink to='about' onClick={onClick} >ABOUT</NavLink>
                    </NavLinkContainer>
                    <NavLinkContainer>
                        <NavLink to='join' onClick={onClick} >JOIN</NavLink>
                    </NavLinkContainer>
                    <NavLinkContainer>
                        <NavLink to='contact' onClick={onClick} >CONTACT</NavLink>
                    </NavLinkContainer>
                </NavLinksWrapper>
            </SidebarContainer>  
        </>
    )
}

export default SideBarComponent
