import React from 'react'
import { InfoSectionContainer, InfoHeader, InfoSectionFirstRow, InfoSectionSecondRow, InfoSectionColumnContainer } from './InfoSectionElements'
import AppCardComponent from '../../components/AppCard'


function InfoSection() {
    return (
        <>
            <InfoSectionContainer id='about'>
                <InfoHeader>ABOUT BOOKABIE</InfoHeader>
                <InfoSectionColumnContainer>

                    <InfoSectionFirstRow>
                        <AppCardComponent />
                        <AppCardComponent />
                    </InfoSectionFirstRow>

                    <InfoSectionSecondRow>
                        <AppCardComponent />
                        <AppCardComponent />
                    </InfoSectionSecondRow>
                    
                </InfoSectionColumnContainer>
            </InfoSectionContainer>
        </>
    )
}

export default InfoSection
