import React from 'react';
import styled from 'styled-components';

const Contact: React.FC = () => {
  const submitForm = () => {
    return;
  }

  return (
    <>
    <form>
      <input id='name' type='text' />
      <input id='email' type='email' />
      <textarea id='message' />
      <button onClick={submitForm}>Submit</button>
    </form>
    </>
  );
};

export default Contact;