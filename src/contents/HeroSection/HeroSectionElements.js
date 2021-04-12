import styled from 'styled-components';

export const HeroContainer = styled.div`
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
        background: linear-gradient(180deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.6) 100%);
        z-index: 2;
    }

    @media screen and  (max-width: 960px){
        height: 950px;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    background: #232a34;
`

export const AppVideo = styled.video`
    width: 240px;
    border-radius: 8px;
    height: 500px;
    -o-object-fit: cover;
    background: #232a34;
    margin-right: 28px;

    
    @media screen and  (max-width: 960px){
        -o-object-fit: fill;
        border-radius: 8px;
        width: 90%;
        height: 400px;
        
    }

    @media screen and  (max-width: 560px){
        height: 350px;
    }
`

export const HeroInfoContainer = styled.div`
    position: absolute;
    top: 30px;
    display: flex;
    flex-direction: row;
    width: 60%;
    height: 100%;
    max-width: 60%;
    max-height: 80%;
    padding: 100px 0;
    z-index: 10;

    @media screen and  (max-width: 960px){
        top: 150px;
        flex-direction: column;
        height: 100%;
        padding: 0;
        align-items: center;
        max-width: 100%;
    }

    @media screen and  (max-width: 560px){
        width: 80%;
    }
`

export const TextContainer = styled.div`
    display: flex;
    flex: 2;
    flex-direction: column;
    /* background: orangered; */
    justify-content: center;
    padding-left: 28px;
    margin-right: 15px;
    border-radius: 15px;
    
    @media screen and  (max-width: 960px){
        flex: 1;
        margin-bottom: 24px;
        padding: 0;
    }

`
export const ImageContainer = styled.div`
    flex: 1;
    align-items: center;

    @media screen and  (max-width: 960px){
        align-self: center;
        width: 200px;
        height: 400;
    }
`


export const HeaderText = styled.h1`
    font-size: 2.5rem;
    font-weight: bolder;
    color: #fff;
    padding: 0.5rem 0;

    @media screen and  (max-width: 760px){
        font-size: 2rem;
        padding: 0.4rem 0;
        text-align: center;
    }

    @media screen and  (max-width: 560px){
        font-size: 1.8rem;
        letter-spacing: 0.5px;
    }
`

export const TextInfo = styled.p`
    color: #fff;
    font-size: 1.5rem;
    padding: 0.5rem 0;

    @media screen and  (max-width: 960px){
        font-size: 1.4rem;
        padding: 0.3rem 0;
    }

    @media screen and  (max-width: 760px){
        text-align: center;
    }

`

export const PhoneImage = styled.img`
    position: absolute;
    top:75px;
    right: 0;
    width: 300px;
    height: 500;
    object-fit: cover;
    justify-self: flex-start;
    z-index: 99;

    /* These are to be deleted */
    /* object-fit: cover; */

    @media screen and  (max-width: 960px){
        display: none;
    }
`

export const TextInput = styled.input`
    padding: 12px;
    border-radius: 5px;
    margin-right: 5px;
    border-radius: 5px;
    outline: none;
    border: none;
    width: 100%;
`

export const ActionSection = styled.form`
    display: flex;
    width: 80%;
    margin: 20px 0;

    @media screen and  (max-width: 960px){
        width: 100%;
    }

    @media screen and  (max-width: 760px){
        align-self: center;
    }

    @media screen and  (max-width: 560px){
        align-self: center;
    }

`

export const SubmitButton = styled.button`
    padding: 12px;
    width: 50%;
    background: #B4161B;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1.2rem;
    color: #fff;
`

