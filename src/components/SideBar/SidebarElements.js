import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll'

export const SidebarContainer = styled.div`
    display: none;
    padding: 4rem 3rem;


    @media screen and (max-width: 960px){
        background: #fff;
        display: block;
        height: 650px;
        position: absolute;
        top: ${({ pressed })=> (pressed ? '80px' : '-650px')};
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        z-index: 999;
        transition: 0.2s all ease-in-out;
    }
`

export const NavLinksWrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 90px);
`

export const NavLinkContainer = styled.div`
    /* background: #fff; */
    display: flex;
    align-items: center;
    justify-content: center;

    transition: 0.2s all ease-in-out;

    &:hover{
        cursor: pointer;
    }

`

export const NavLink = styled(LinkS)`
    color: #373463;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    letter-spacing: 1.8px;

    &:hover{
        color: #B4161B;
    }
`