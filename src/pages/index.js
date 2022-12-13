import React, { useState } from 'react'
import { HeroBg } from '../components/HeroSection/HeroElement'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Sidebar from '../components/Sidebar'
import InfoSection from '../components/InfoSection'
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'
import { contactslide } from '../components/ContactSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection/>
            <ContactSection {...contactslide}/>
            <Footer/>
        </>
    )
    /*return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            
            <ContactSection {...contactslide}/>
            <Footer/>
        </>
    )*/
}

export default Home