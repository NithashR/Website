import React, { useState } from 'react'

import { Button } from '../ButtonElement';
import { FaDownload } from 'react-icons/fa'
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Robot from '../../images/robot.png'
import Ebay from '../../images/ebay.png'
import Train from '../../images/train.png'
import Website from '../../images/website.png'
import './index.css';

import {
    InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, Column, Column4, Description, ProjectWrapper,
    TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img, Tops, ContactInfo, Main, Sidebar, InfoRow2, InfoWrapper2
} from './InfoElements';
import { Row } from 'react-bootstrap';

/*const InfoSection = ({rowline, lightBg, id, imgStart, topLine, lightText, headLine, darkText, description, buttonLabel, img2, img, alt, primary, dark, dark2, header, heights}) => {
    return (
            <InfoContainer lightBg = {lightBg} id={id}>
                <InfoWrapper>
                    <InfoRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={lightText}>{headLine}</Heading>
                                <Subtitle darkText={darkText}>{description}</Subtitle>
                                <BtnWrap>
                                    <Button to="home" 
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact="true"
                                    offset={-80}
                                    primary={primary ? 1 : 0}
                                    dark={dark ? 1: 0}
                                    dark2={dark2 ? 1 : 0}
                                    >{buttonLabel} </Button>
                                </BtnWrap>
                            </TextWrapper>
                                <Img src={img2}/>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </InfoRow>
                </InfoWrapper>
            </InfoContainer>
    )
}
*/

const InfoSection=()=>
{
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return(
        <section id="info">
            <div className='about'>
                <InfoContainer lightBg = {false} id={"about"}>
                    <InfoWrapper>
                        <InfoRow imgStart={true}>
                            <Column1>
                                <TextWrapper>
                                    <TopLine>About Me</TopLine>
                                    <Subtitle>{
                                        "I'm a recent Computer Science graduate from Toronto Metropoltian University, formerly known as Ryerson University. I have spent the fours years of my undergrad, understanding how large the field is. I have also spent time working as a Intern at Resimply Kitchens, where I built a website and focused on automation. I am currently looking for a job in software development, IT or data analysis."
                                    }</Subtitle>
                                    <a className="button2" target="_blank" href = 'https://drive.google.com/file/d/1AVEzGIKynDHDzFap9f-2TPn70QnGBN5N/view?usp=sharing' > 
                                        <FaDownload style={{marginRight: 10}}> </FaDownload> Download Resume 
                                    </a>
                                    
                                </TextWrapper>
                            </Column1>
                            <Column2>
                                <ImgWrap >
                                    <Img src={require('../../images/headshot.svg').default} style ={{width: 300, height:400}} alt={'Creation'} />
                                </ImgWrap>
                                <TopLine> Contact Info</TopLine>
                                <ContactInfo > Nithash Rajendram<br />Toronto, Ontario, Canada<br />Phone: 647-544-2092 <br />Email: Nithash.rajendram@ryerson.ca</ContactInfo>
                            </Column2>
                        </InfoRow>
                    </InfoWrapper>
                </InfoContainer>
            </div>


            <div className="resume">
            <InfoContainer lightBg = {true} id={"resume"} >
                <InfoWrapper2>
                    <InfoRow2 imgStart={true}>
                        <Column4>
                            <TopLine style={{textDecorationLine: 'underline', textDecorationStyle: "solid", textDecorationColor: "black", textDecorationThickness: 5}}>Education</TopLine>
                        </Column4>
                        <Column>
                                <TopLine style={{color: "black"}}>Toronto Metropoltian University sss</TopLine>
                                <TopLine style={{color: "grey"}}>Bachelors in Computer Science <span>•</span> Graduated April 2022</TopLine>
                                <Description style={{color: "grey"}}>After finding an interest in computer science, during high school, I decided to pursue it for my undergrad, 
                                                                    at Toronto Metropolitan University. During my four years at TMU, I learned a lot, from basic programming/developing
                                                                    practices to the functions of Artificial Intelligence. I took courses on data structures, operating systems, database
                                                                    systems, discrete structures, algorithms, and many more. It was here that I discovered my passion for application programming 
                                                                    and data analyzing. </Description>
                        </Column>
                    </InfoRow2>
                    <hr style={{marginTop: "100px", color: 'black' ,backgroundColor: 'black',height: 1}}/>
                    <InfoRow2 imgStart={true} style={{marginTop: "40px", marginBottom: "400px"}}>
                        <Column4 >
                            <TopLine style={{textDecorationLine: 'underline', textDecorationStyle: "solid", textDecorationColor: "black", textDecorationThickness: 5}}>Work</TopLine>
                        </Column4>
                        <Column>
                                <TopLine style={{color: "black"}}>Resimply Kitchen and Cabinets</TopLine>
                                <TopLine style={{color: "grey"}}>Software Engineer Intern <span>•</span> Summer 2019 & 2020</TopLine>
                                <Description style={{color: "grey"}}>At Resimply Kitchen and Cabinets, they made kitchens, vanities, and other cabinets, based on the customer's
                                                                    needs. I was hired to create a website, an automation system for data entry, and even design some kitchens. 
                                                                    As it was a small company, I had to work close to other employees to make sure they understood what I was doing 
                                                                    and how it will affect their day-to-day procedures. </Description>

                                <TopLine style={{color: "black"}}>Peel Sail Science Camp</TopLine>
                                <TopLine style={{color: "grey"}}>Robotics Instructor <span>•</span> Summer 2018</TopLine>
                                <Description style={{color: "grey"}}>This camp was for students in public school and allowed us to create a learning schedule that focused on learning
                                                                    about some basics around robotics and programming. We used programs that allow the students to use drag and drop to 
                                                                    code small robotic spheres. As this was a camp for younger children, we had to focus on how we can keep the lessons simple
                                                                    and fun so they can gain interest without finding it too complicated. </Description>

                                <TopLine style={{color: "black"}}>David Suzuki Robotics</TopLine>
                                <TopLine style={{color: "grey"}}>Team Leader <span>•</span> 2014 - 2018</TopLine>
                                <Description style={{color: "grey"}}>Each year we were assigned a different task that the robot has to complete during the competition. For example, during the last year,
                                                                    we had to build a  robot that would be capable of carrying a cone and placing it on a stack. We also had to program the robot to do this 
                                                                    autonomously at the start. We were able to reach provincials in the competition. As a team leader, I had to make sure we were following our schedule,
                                                                    as we did not have a lot of time. Another part that I found very important as a leader was, that I had to make sure everyone was heard, because 
                                                                    there were times in the previous years when people stopped showing up, due to felling left out. </Description>

                                
                        </Column>
                    </InfoRow2>
                    <hr style={{color: 'black' ,backgroundColor: 'black',height: 1}}/>
                    <InfoRow2 imgStart={true} style={{marginTop: "40px"}}>
                        <Column4>
                            <TopLine style={{textDecorationLine: 'underline', textDecorationStyle: "solid", textDecorationColor: "black", textDecorationThickness: 5}}>Tech</TopLine>
                        </Column4>
                        <Column>
                                <Description style={{color: "grey"}}>These are just some technologies which I have used in the past and like.</Description>
                        </Column>
                    </InfoRow2>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 , alignItems: 'center'}}>
                            <div><img src={require('../../images/git.svg').default} style ={{width:200, height:200}} alt={'Git'} /></div>
                            <div><img src={require('../../images/java.svg').default} style ={{width:200, height:200}} alt={'Java'} /></div>
                            <div><img src={require('../../images/python.svg').default} style ={{width:200, height:200}} alt={'Python'} /></div>
                            <div><img src={require('../../images/c++.svg').default} style ={{width:200, height:200}} alt={'C++'} /></div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 20 , alignItems: 'center'}}>
                            <div><img src={require('../../images/matlab.svg').default} style ={{width:200, height:200}} alt={'Matlab'} /></div>
                            <div><img src={require('../../images/anaconda.svg').default} style ={{width:200, height:200}} alt={'Anaconda'} /></div>
                            <div><img src={require('../../images/sql2.svg').default} style ={{width:200, height:200}} alt={'Sql'} /></div>
                            <div><img src={require('../../images/react.svg').default} style ={{width:200, height:200}} alt={'React'} /></div>
                        </div>
                </InfoWrapper2>
            </InfoContainer>
            </div>

            <div className='works'>
                <InfoContainer lightBg = {false} id={"works"}>
                    <ProjectWrapper>
                        <TopLine style={{color:"#0057fa", marginTop:40 , alignItems: 'center', textAlign:'center', fontSize:40 }}>
                            Past Projects
                        </TopLine>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 , alignItems: 'center'}}>
                            <div><a href='https://nithash.itch.io/robot-apocalypse'><img className = "content" src={Robot} style ={{width:400, height:200}} alt={'Robot'}  onClick='https://nithash.itch.io/robot-apocalypse'/></a></div>
                            <div><a href='https://github.com/NithashR/Ebay_Auction'><img className = "content" src={Ebay} style ={{width:400, height:200}} alt={'Ebay'}  onClick='https://github.com/NithashR/Ebay_Auction'/></a></div>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridGap: 20 , alignItems: 'center'}}>
                            <div><a href='https://github.com/NithashR/TrainGame'><img className = "content" src={Train} style ={{width:400, height:200}} alt={'Train'}  onClick='https://github.com/NithashR/TrainGame'/></a></div>
                            <div><a href='http://localhost:3000'><img className = "content" src={Website} style ={{width:400, height:200}} alt={'Website'}  onClick='http://localhost:3000'/></a></div>
                        </div>
                    </ProjectWrapper>
                </InfoContainer>
            </div>
        </section>


    )
}

export default InfoSection