import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ContactSection = styled.section`
  margin-top: 2.5rem;
  background-color: #495159;
  padding-left: 1rem;
  padding-right: 1rem;
  padding-bottom: 2rem;
  color: white;
  text-align: center;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: auto;
`;

const FormInput = styled.input`
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: white;

  &:focus {
    color: black;
    outline: none;
    border-color: #009578;
  }
`;

const FormTextArea = styled.textarea`
  padding: 10px;
  margin: 10px 0;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: white;

  &:focus {
    color: black;
    outline: none;
    border-color: #009578;
  }
`;

const SubmitButton = styled.button`
  background-color: #009578;
  border: none;
  color: white;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin-top: 0.5rem;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #008168;
  }

  &:active {
    background: #006e58;
  }
`;

const ResponseMessage = styled.p`
  color: ${props => props.isSuccess ? 'green' : 'red'};
  text-align: center;
  margin-top: 1rem;
`;

export const Contact = () => {
    const form = useRef();
    const [responseMessage, setResponseMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_mb2cfr8', 'template_bwp0j24', form.current, 'iB3ziWKRKEC8U8xQ7')
            .then((result) => {
                console.log(result.text);
                setResponseMessage('Message sent successfully!');
                setIsSuccess(true);
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                setResponseMessage('Failed to send message. Please try again later.');
                setIsSuccess(false);
            });
    };

    return (
        <ContactSection id="contact">
            <h1>Contact</h1>
            <ContactForm ref={form} onSubmit={sendEmail}>
                <FormInput type="text" name="from_name" placeholder="Your Name" required />
                <FormInput type="email" name="email" placeholder="Your Email" required />
                <FormTextArea name="message" placeholder="Your Message" rows="4" required />
                <SubmitButton type="submit">Send</SubmitButton>
            </ContactForm>
            {responseMessage && (
                <ResponseMessage isSuccess={isSuccess}>
                    {responseMessage}
                </ResponseMessage>
            )}
        </ContactSection>
    );
};

export default Contact;
