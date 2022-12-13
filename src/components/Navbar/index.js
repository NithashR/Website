import React, {useEffect, useState} from 'react'
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';

const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false)

  const changeNav = () => {
    if(window.scrollY >= 80 )
    {
      setScrollNav(true);
    }
    else{
      setScrollNav(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  },[]);

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to='/' onClick={toggleHome}>NR</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='home' onClick={toggleHome}>Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='about' duration={500} spy={true} exact ='true' offset={-80} 
              >About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='resume'  duration={500} spy={true} exact ='true' offset={-80} 
              >Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='works'  duration={500} spy={true} exact ='true' offset={-80} 
              >Portfolio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
              to='contact1'  duration={500} spy={true} exact ='true' offset={-80}
              >Contact</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;