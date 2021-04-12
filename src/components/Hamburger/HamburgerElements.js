import styled from 'styled-components';

export const HamContainer = styled.div`
    display: none;

    &:hover{ 
        cursor: pointer;
    }

    @media screen and (max-width: 960px){
        display: block;
    }
`
