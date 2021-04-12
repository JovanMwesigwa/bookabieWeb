import styled from 'styled-components';


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
    flex: 1;
    /* background: red; */
`;

export const InfoSectionSecondRow = styled.div`
    flex: 1;
    /* background: orange; */
`;

export const TextInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 75px 0;
`;

export const MainHeading = styled.h2`
    
    color: orangered;
    font-size: 1.2rem;
    font-weight: bolder;
    flex-wrap: wrap;
    line-height: 40px;
    
    @media screen and  (max-width: 960px){
        font-size: 1.1rem;
        line-height: 20px;
    }

    @media screen and  (max-width: 760px){
        font-size: 1rem;
        line-height: 25px;
    }

`;

export const HeaderContainer = styled.div`
    display: flex;
    flex: 1;
`;

export const IconContainer = styled.div`
    align-items: center;
    display: flex;
    width: 65px;
    height: 65px;
    background: orangered;
    border-radius: 45px;
    margin-right: 20px;
    justify-content: center;

    @media screen and  (max-width: 960px){
        width: 60px;
        height: 60px;
    }

    @media screen and  (max-width: 760px){
        /* font-size: 2rem; */
    }

    @media screen and  (max-width: 560px){
        width: 55px;
        height: 55px;
    }
`;

export const TextInfo = styled.p`
    font-size: 0.9rem;
    padding-top: 24px;
    letter-spacing: 1px;
    color: gray;

    @media screen and  (max-width: 960px){
        font-size: 0.8rem;
    }

`

export const TextContainer = styled.div`
    flex: 1;
    padding-right: 10px;
`
