import React from 'react'
import BodySectionComponent from '../contents/BodySection'
import FooterSection from '../contents/Footer'
import HeroSection from '../contents/HeroSection'
import InfoSection from '../contents/InfoSection'
import NavBar from '../contents/Navbar'

function Home() {
    return (
        <>
            <NavBar />
            <HeroSection />
            <InfoSection />
            <BodySectionComponent />
            <FooterSection />
        </>
    )
}

export default Home
