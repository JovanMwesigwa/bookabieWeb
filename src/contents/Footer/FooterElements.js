import styled from 'styled-components';

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1;
    background: #2d0404;
    /* height: 700px; */
    width: 100%;
    padding: 185px 65px;

    @media screen and  (max-width: 960px){
        grid-template-columns: 1fr 1fr;
        padding: 100px 10px;
    }

    @media screen and  (max-width: 760px){
        grid-template-columns: 1fr;
    }

`;  

export const AppInfoContainer = styled.div`
    padding: 0 18px;


    @media screen and  (max-width: 960px){
       margin-bottom: 30px;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: flex-start;
    padding: 0 18px;

    @media screen and  (max-width: 960px){
       margin-bottom: 30px;
    }
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;  
    align-items: flex-start;
    padding: 0 18px;

    
    @media screen and  (max-width: 960px){
       margin-bottom: 30px;
    }

`;

export const LinksContainer = styled.div`
    /* background: ?red; */
    padding: 0 18px;

    
    @media screen and  (max-width: 960px){
       margin-bottom: 30px;
    }
`;

export const LogoContainer = styled.div`
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    width: 50px;
    height: 50px;
    margin-right: 8px;
`;

export const LogoText = styled.h1`
    color: #ccbcbc;
    font-size: 2rem;
`;

export const LogoTextInfo = styled.p`
    color: #9c5e5e;
    font-size: 0.9rem;
    line-height: 25px;
    padding-top: 24px;
    font-weight: 500;
`;

export const Heading = styled.h3`
    color: #ccbcbc;
    font-size: 1.6rem;
`;

export const AppForm = styled.div`
    margin-top: 45px;
   
`;

export const NameInput = styled.input`
    width: 100%;
    height: 45px;
    background: #69241f;
    border: none;
    outline: none;
    padding-left: 12px;
    margin-bottom: 24px;
    color: #fff;
    font-size: 1.1rem;
`;

export const AppTextInput = styled.textarea`
    width: 100%;
    height: 100px;
    background: #69241f;
    border: none;
    outline: none;
    padding: 12px;
    margin-bottom: 24px;
    color: #fff;
    font-size: 1.1rem;
`;

export const AppButton = styled.button`
    width: 100%;
    height: 45px;
    background: #69241f;
    border: none;
    outline: none;
    font-size: 1.3rem;
    color: #9c5e5e;
    font-weight: bold;
    
    &:hover{
        cursor: pointer;
    }
`;

export const AddressContainer = styled.div`
    margin-top: 45px;
`;

export const LocationText = styled.p`
    color: #9c5e5e;
    font-size: 0.9rem;
    font-weight: 600;
    margin-left: 5px;
`;

export const InfoContainer = styled.div`
    display: flex;
    margin-bottom: 24px;

    &:hover {
        cursor: pointer;
    }
`;