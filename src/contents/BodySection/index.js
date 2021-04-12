import React from 'react'
import { AppStore, BodyContainer, BodyImage, InfoContainer, HeaderText } from './BodySectionElement'

import kla from '../../assets/kla.jpg'

function BodySectionComponent() {
    return (
        <BodyContainer id='join'>
            <BodyImage src={kla} alt='kampala' />
            <InfoContainer>
                <HeaderText>BOOK YOUR DOWNLOAD TODAY!</HeaderText>
                <AppStore ></AppStore>
                <AppStore ></AppStore>
            </InfoContainer>
        </BodyContainer>
    )
}

export default BodySectionComponent
