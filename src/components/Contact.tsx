import * as React from "react";
import styled from 'styled-components';

import Button from './Button';
import { DividerHorizontal, ContentHeader } from "./layout";

const ContactSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
  margin: 3rem 1rem;
  height: 80vh;
  z-index: 1;
  background-color: #ffffff;
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1rem;
`;

const FormInput = styled.input`
  margin: 1rem;
  padding: 0.5rem;
  min-width: 25vw;
  border: 1px solid rgba(0,0,0,0.35);
`;

const FormMessage = styled.textarea`
  padding: 0.5rem;
  margin: 1rem;
  min-width: 25vw;
  min-height: 5rem;
  border: 1px solid rgba(0,0,0,0.35);
`;


const Contact: React.FC = () => {
  const submitForm = () => {
    console.log('Form Submitted');
    return;
  }

  return (
    <>
      <ContactSection id="Contact">
        <ContentHeader>
          <h2>Contact</h2>
          <DividerHorizontal />
        </ContentHeader>
        <p>Send me a quick message about your needs</p>
        <ContactForm>
          <FormInput id='name' type='text' />
          <FormInput id='email' type='email' />
          <FormMessage id='message' />
          {/* put recaptcha here */}
          <Button onClick={submitForm}>Submit</Button>
        </ContactForm>
      </ContactSection>
    </>
  );
};

export default Contact;