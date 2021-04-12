import React from 'react'
import { IconContainer, TextContainer, MainHeading, TextInfo, HeaderContainer, TextInfoContainer } from './AppCardElements'
import { MdStar, MdQuestionAnswer, MdBookmarkBorder, MdFeedback } from 'react-icons/md'


function AppCardComponent({ item }) {

    const IconName = item.icon
    console.log(IconName);
    return (
        <>
            <TextInfoContainer>
                <HeaderContainer>
                    <IconContainer>
                        <MdStar size={38} color="#fff" />
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
