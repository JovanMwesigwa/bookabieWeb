import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll' 

export const NavbarContainer = styled.div`
    background: ${({pressed}) => (pressed ? 'black' : "")};
    background-color: ${({scrollNav}) => (scrollNav ? '#fff': '')};
    height: 80px;
    width: 100%;
    right: 0;
    left: 0;
    margin-top: -80px;
    top: 0;
    position: sticky;
    z-index: 999;
    transition: 0.9s all ease-in-out;
    
    @media screen and (max-width: 768px){
        height: 65px;
        transition: 0.8s all ease;
    }

`

export const NavbarContent = styled.div`
    align-items: center;
    display: flex;
    height: 100%;
    max-width: 90%;
    margin: auto;
    justify-content: space-between;
`;

export const NavLogoContainer = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;

`

export const NavLogo = styled.h1`
    /* color: #f5efef; */
    color: #373463;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;

    @media screen and (max-width: 960px){
        font-size: 1.8rem;
    }

    @media screen and (max-width: 560px){
        display: none;
    }
`

export const NavLogoImage = styled.div`
    background: #B4161B;
    border-radius: 40px;
    height: 60px;
    margin-right: 12px;
    width: 60px;

    @media screen and (max-width: 960px){
        width: 55px;
        height: 55px;
    }

    @media screen and (max-width: 560px){
        width: 50px;
        height: 50px;
    }
`

export const Logo = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    
`

export const NavLinksContainer = styled.div`
    display: flex;
    
    @media screen and (max-width: 960px){
        display: none;
    }

`

export const NavLinkWrapper = styled.ul`
    display: flex;
    flex-direction: row;
    text-decoration: none;
    list-style: none;
`

export const NavLinkContainer = styled.div`
    align-items: center;
    display: flex;
    height: 80px;
    width: 100%;

    &:hover {
        cursor: pointer;
        transition: 0.2s ease-in-out;
        border-bottom: 4px solid #B4161B;
    }

    &:active{
        border-bottom: 4px solid #B4161B;
    }
`

export const NavLink = styled(LinkS)`
    /* color: #f5efef; */
    color: ${({ scrollNav }) => (scrollNav ? '#f5efef' : '#373463')};
    font-size: 1.3rem;
    font-weight: 600;
    padding: 0 28px;

    
`
