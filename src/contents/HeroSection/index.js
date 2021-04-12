import React from 'react'
import { ActionSection, HeroContainer, Img, SubmitButton, TextInput, PhoneImage, TextInfo, HeaderText, ImageContainer, HeroInfoContainer, TextContainer } from './HeroSectionElements'

import kla from '../../assets/shopping.jpg';
import phone from '../../assets/phone.png';

function HeroSection() {
    return (
        <>
          <HeroContainer>
            <Img src={kla} alt='kampala' />
            <HeroInfoContainer>
              <TextContainer>
                <HeaderText>
                    Reach your clients
                </HeaderText>
                <HeaderText>
                    Find your products
                </HeaderText>
                <HeaderText>
                    Get shopping
                </HeaderText>
                <TextInfo>
                    Book your <strong>BookabieApp</strong> Today!
                </TextInfo>
                <TextInfo>
                    Its Free!
                </TextInfo>

                <ActionSection>
                  <TextInput placeholder="Email Or Phone" />
                  <SubmitButton type='submit' >Submit</SubmitButton>
                </ActionSection>

              </TextContainer>
              <ImageContainer>
                {/* <PhoneImage src={phone} alt="app" /> */}
              </ImageContainer>
            </HeroInfoContainer>
          </HeroContainer>
        </>
    )
}


export default HeroSection
