import React from 'react'
import { ActionSection, AppVideo, HeroContainer, Img, SubmitButton, TextInput, PhoneImage, TextInfo, HeaderText, ImageContainer, HeroInfoContainer, TextContainer } from './HeroSectionElements'

import { firestore } from '../../Firebase/Firestore'
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore

import kla from '../../assets/shopping.jpg';
import phone from '../../assets/phonepng.png'
import video from '../../assets/video.mp4';

function HeroSection() {
  const [ text, setText ] = React.useState("")

  const handleSubmit = e => {
    e.preventDefault()
    const db = firestore
    db.collection("users").add({
      email: text
    }).then(res => {
      console.log("Document written with ID: ", res.id);
    }).catch(error => {
      console.error("Error adding document: ", error);
    });  
    setText("");
  }

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

                <ActionSection onSubmit={handleSubmit}>
                  <TextInput
                    placeholder="Email Or Phone" 
                    value={text}
                    onChange={e => setText( e.target.value)}
                   
                   />
                  <SubmitButton 
                    type='submit'
                   >Submit</SubmitButton>
                </ActionSection>

              </TextContainer>
              <ImageContainer>
                <AppVideo src={video} 
                  autoPlay={true} 
                  muted = {true}
                   loop={true} 
                />
                    <PhoneImage src={phone} alt="app" />
              </ImageContainer>
            </HeroInfoContainer>
          </HeroContainer>
        </>
    )
}


export default HeroSection
