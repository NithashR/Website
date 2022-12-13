import React from 'react'
import { Button } from '../ButtonElement';
import { FiMail } from 'react-icons/fi'
import { FaBars } from 'react-icons/fa'
import emailjs from "emailjs-com";
import {
    ContactContainer, Title, Message, MailIcon, Form, ContactRow, ContactWrapper, Column1, Column2, Sizing, ContactInfo
} from './ContactElements';

const ContactSection =({id, spot}) => {

    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm('service_h8tcjjo', 'template_z6hdyzq', e.target, 'bTauqbfFjUgPsgu8A')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()

    }
    return (
        <>
            <ContactContainer id={id}>
                <MailIcon>
                    <FiMail />
                </MailIcon>
                <ContactWrapper>
                        <Message>
                            If you have any questions for me, please fill out the following,
                            and I will get back to you.
                        </Message>
                    <ContactRow spot = {spot}>
                        <Column1>
                            <Title>
                                Contact Info
                            </Title>
                            <ContactInfo>
                                Email: Nithash.rajendram@ryerson.ca
                            </ContactInfo>
                            <ContactInfo>
                                Phone: 647-544-2097
                            </ContactInfo>
                        </Column1>
            
                        <Column2>
                            <Form>
                                <form id="contact-form" onSubmit={sendEmail}>
                                    <div className ="forms">
                                        <div className="form-group" >
                                            <input id="name" type="text"  className="form-control" placeholder="Name*" name="name" style={{width: "400px", height: "40px", fontSize: "20px"}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" className="form-control" placeholder="Email Address*" name="email"style={{width: "400px", height: "40px", fontSize: "20px"}}/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Subject" name="subject"style={{width: "400px", height: "40px", fontSize: "20px"}}/>
                                        </div>
                                        <div className="form-group" style={{padding: "3px"}}>
                                            <textarea className="form-control" id="" cols="30" rows="8" placeholder='Your Message*' name="message" style={{width: "400px", height: "250px", fontSize: "20px"}}></textarea>
                                        </div>
                                        <div className="col-8">
                                            <input type="submit" className="btn btn-info" value="Send Message" style={{width: "400px", height: "40px", fontSize: "20px"}}></input>
                                        </div>
                                    </div>
                                </form>
                            </Form>
                        </Column2>
                    </ContactRow>
                </ContactWrapper>
            </ContactContainer>
        </>
    )
}

export default ContactSection