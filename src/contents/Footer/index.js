import React from 'react'
import { AddressContainer, InfoContainer,LocationText, AppInfoContainer, AppButton, AppTextInput, AppForm, NameInput, Logo, LogoText, Heading, LogoTextInfo, LogoContainer, LinksContainer, FormContainer, ContactContainer, FooterContainer } from './FooterElements'
import { MdLocationOn, MdPhone, } from 'react-icons/md'
import { FaGlobeAfrica, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'


import logo from '../../assets/logo.png';

function FooterSection() {
    return (
        <FooterContainer id='contact'>
            <AppInfoContainer>
                <LogoContainer>
                    <Logo src={logo} alt='bookabie' />
                    <LogoText>Bookabie</LogoText>
                </LogoContainer>
                <LogoTextInfo>
                    Bookabie is an online platform that joins a community of business owners to their potiential clients, through sharing images of their products on the platform.
                </LogoTextInfo>
            </AppInfoContainer>
            <FormContainer>
                <Heading>Email Us</Heading>
                <AppForm>
                    <NameInput placeholder="Your Name" />
                    <NameInput placeholder="Your Email" />
                    <AppTextInput placeholder="Your Message" />
                    <AppButton>Submit</AppButton>
                </AppForm>
            </FormContainer>
            <ContactContainer>
                <Heading>Contact</Heading>
                <AddressContainer>
                    <InfoContainer>
                        <MdLocationOn size={18} color="#9c5e5e" />
                        <LocationText>Kampala, UGANDA</LocationText>
                    </InfoContainer>
                    <InfoContainer>
                        <MdPhone size={18} color="#9c5e5e" />
                        <LocationText>Phone: +256758019617</LocationText>
                    </InfoContainer>
                    <InfoContainer>
                        <FaGlobeAfrica size={18} color="#9c5e5e" />
                        <LocationText>Website: www.bookabieapp.com</LocationText>
                    </InfoContainer>
                </AddressContainer>
            </ContactContainer>
            <LinksContainer>
                <Heading>Useful Links</Heading>
                <AddressContainer>
                    <InfoContainer>
                        <FaFacebook size={18} color="#9c5e5e" />
                        <LocationText>Facebook</LocationText>
                    </InfoContainer>
                    <InfoContainer>
                        <FaTwitter size={18} color="#9c5e5e" />
                        <LocationText>Twitter</LocationText>
                    </InfoContainer>
                    <InfoContainer>
                        <FaInstagram size={18} color="#9c5e5e" />
                        <LocationText>Instagram</LocationText>
                    </InfoContainer>
                </AddressContainer>
            </LinksContainer>
        </FooterContainer>
    )
}

export default FooterSection
