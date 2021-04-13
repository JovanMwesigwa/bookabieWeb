import React from 'react'
import { InfoSectionContainer, InfoHeader, InfoSectionFirstRow, InfoSectionColumnContainer } from './InfoSectionElements'
import AppCardComponent from '../../components/AppCard'

import {data} from '../../data/'

function InfoSection() {
    return (
        <>
            <InfoSectionContainer id='about'>
                <InfoHeader>ABOUT BOOKABIE</InfoHeader>
                <InfoSectionColumnContainer>

                    <InfoSectionFirstRow >
                        {
                            data.map(item => (
                                <div key={item.id}>
                                    <AppCardComponent item={item} />
                                </div>
                                ))
                            }
                    </InfoSectionFirstRow>

                </InfoSectionColumnContainer>
            </InfoSectionContainer>
        </>
    )
}

export default InfoSection
