import React from 'react'
import { IconContainer, TextContainer, MainHeading, TextInfo, HeaderContainer, TextInfoContainer } from './AppCardElements'
import { MdStar } from 'react-icons/md'


function AppCardComponent({ item }) {
    return (
        <>
            <TextInfoContainer>
                <HeaderContainer>
                    <IconContainer>
                        <MdStar size={35} color="#fff" />
                    </IconContainer>
                    <TextContainer>
                        <MainHeading>
                            {item.title}
                        </MainHeading>
                        <TextInfo>
                            {item.content}
                        </TextInfo>
                    </TextContainer>
                </HeaderContainer>
            </TextInfoContainer>
        </>
    )
}

export default AppCardComponent
