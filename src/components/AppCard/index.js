import React from 'react'
import { IconContainer, TextContainer, MainHeading, TextInfo, HeaderContainer, TextInfoContainer } from './AppCardElements'
import { MdStar, MdQuestionAnswer, MdBookmarkBorder, MdFeedback } from 'react-icons/md'


function AppCardComponent() {
    return (
        <>
            <TextInfoContainer>
                <HeaderContainer>
                    <IconContainer>
                        <MdBookmarkBorder size={38} color="#fff" />
                    </IconContainer>
                    <TextContainer>
                        <MainHeading>
                            PERSONALIZED PROGRAMS IN LINE WITH YOUR
                            GOALS AND EQUIPMENT
                        </MainHeading>
                        <TextInfo>
                        If you use a proxy server…
                        your network administrator to make sure the proxy server is working. If you don't believe you should be using a proxy server: Go to the Chrome menu > Settings > Show advanced settings… > Change proxy settings… > LAN Settings and deselect "Use a proxy server for your LAN".
                        </TextInfo>
                    </TextContainer>
                </HeaderContainer>
            </TextInfoContainer>
        </>
    )
}

export default AppCardComponent
