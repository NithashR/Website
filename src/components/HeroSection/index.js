import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { HeroBg, HeroContainer, VideoBg, HeroContent, HeroH1, HeroP, HerobtnWrapper, ArrowForward, ArrowRight } from './HeroElement'
import { FaFacebook, FaGithub,FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { SocialIconLink, SocialMedia, SocialLogo, WebsiteRights, SocialIcons, SocialMediaWrap } from './HeroElement';

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer >
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Nithash Rajendram</HeroH1>
                <HeroP style={{}}>
                    I am a Toronto, Canada based Software Developer. 
                    I recently Computer Science graduate, from Toronto Metropolitan University.
                </HeroP>
            
                <SocialIcons>

                        <SocialIconLink href="//www.facebook.com/nithash.ashok" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>

                            <SocialIconLink href="//www.linkedin.com/in/nithash" target="_blank"
                            aria-label="Linkedin">
                                <FaLinkedin />
                            </SocialIconLink>

                            <SocialIconLink href="//www.twitter.com/Nithash19" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>

                            <SocialIconLink href="//www.github.com/NithashR/NithashR/" target="_blank"
                            aria-label="Github">
                                <FaGithub />
                            </SocialIconLink>

                            <SocialIconLink href="//www.instagram.com/nithash_00/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                        </SocialIconLink>

                    </SocialIcons>

                    <HerobtnWrapper>
                    <Button to='contact1' onMouseEnter={onHover} onMouseLeave={onHover}
                        primary='true' dark='true'> Contact {hover ? <ArrowForward /> : <ArrowRight />}</Button>
                    </HerobtnWrapper>

                </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection