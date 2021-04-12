import styled from 'styled-components';

export const InfoSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* height: 800px; */
    width: 100%;
    background: #fff;
    justify-content: center;
    padding: 0 65px;

    @media screen and  (max-width: 960px){
        padding: 0 45px;
    }

    @media screen and  (max-width: 760px){
        padding: 0 20px;
    }

`;

export const InfoHeader = styled.h1`
    font-size: 2.8rem;
    text-align: center;
    color: #504d4d;
    font-weight: bolder;
    letter-spacing: 1;
    padding-top: 100px;

    @media screen and  (max-width: 960px){
        font-size: 2.5rem;
    }

    @media screen and  (max-width: 760px){
        font-size: 2rem;
    }

    @media screen and  (max-width: 560px){
        font-size: 2rem;
    }
`;

export const InfoSectionColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    /* background: yellow; */

    @media screen and  (max-width: 960px){
        flex-direction: column;
    }

    @media screen and  (max-width: 760px){
        /* font-size: 2rem; */
    }

    @media screen and  (max-width: 560px){
        /* font-size: 2rem; */
    }
`;

export const InfoSectionFirstRow = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;


    @media screen and  (max-width: 960px){
        grid-template-columns: 1fr;
        grid-gap: 0px;
        margin: 0px;
    }

    @media screen and  (max-width: 760px){
        grid-template-columns: 1fr;
        grid-gap: 0px;
        margin: 0;
    }

    @media screen and  (max-width: 560px){
        grid-template-columns: 1fr;
        grid-gap: 0px;
        margin: 0;
    }
`;

export const InfoSectionSecondRow = styled.div`
    flex: 1;
    
    @media screen and  (max-width: 960px){
        margin: 0;
    }

    @media screen and  (max-width: 760px){
        margin: 0;
    }

    @media screen and  (max-width: 560px){
        margin: 0;
    }
`;


