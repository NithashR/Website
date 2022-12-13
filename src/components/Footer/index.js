import React from 'react'
import {animateScroll as scroll} from 'react-scroll'; 
import { FaFacebook, FaGithub,FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';
import {FooterContainer, FooterLink, FooterLinkItems, FooterLinkTitle, FooterLinksWrapper, FooterLinksContainer, FooterWrap} from './FooterElements';
import { SocialIconLink, SocialMedia, SocialLogo, WebsiteRights, SocialIcons, SocialMediaWrap } from './FooterElements';



const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      }

  return (
    <FooterContainer>
        <FooterWrap>

            {/* <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>About Me</FooterLinkTitle> 
                            <FooterLink to='contact'>Hobbies</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer> */}

        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    NR
                </SocialLogo>
                <WebsiteRights>NR Ⓒ {new Date().getFullYear()}All rights reserved.</WebsiteRights>
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
            </SocialMediaWrap>
        </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer