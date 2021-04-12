import styled from 'styled-components'

export const BodyContainer = styled.div`
    background: black;
    display: flex;
    align-items: center;
    height: 800px;
    width: 100%;
    position: relative;
    top: 0px;
    left: 0;
    right: 0;
    bottom: 0;
    justify-content: center;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.6) 100%, rgba(0,0,0,0.6) 100%);
        z-index: 2;
    }
`;

export const BodyImage = styled.img`
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%);

`;

export const InfoContainer = styled.div`
    align-items: center;
    display: flex;
    position: absolute;
    flex-direction: column;
    width: 70%;
    height: 70%;
    /* background: orangered; */
    z-index: 10;

`;

export const HeaderText = styled.p`
    color: #fff;
    font-size: 3rem;
    text-align: center;
    font-weight: normal;
    padding-top: 24px;
    margin-bottom: 24px;

    @media screen and  (max-width: 960px){
        font-size: 2.8rem;
    }

    @media screen and  (max-width: 760px){
        font-size: 2.5rem;
    }

    @media screen and  (max-width: 560px){
        font-size: 2rem;
    }
`;

export const AppStore = styled.img`
    width: 50%;
    height: 100px;
    border-radius: 15px;
    background: black;
    margin: 38px 0;
    transition: 0.2s all ease-in-out;
    -o-object-fit: cover;

    &:hover{
        cursor: pointer;
    }

    @media screen and  (max-width: 960px){
        width: 60%;
    }

    @media screen and  (max-width: 760px){
        width: 70%;
    }

    @media screen and  (max-width: 560px){
        width: 80%;
    }

`