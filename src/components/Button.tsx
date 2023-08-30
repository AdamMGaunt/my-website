import React from 'react';
import styled from 'styled-components';

const DefaultButton = styled.button`
  background-color: rgba(0,0,0,0);
  border: none;
  color: black;
  font-size: 1rem;
  padding: 1rem;
`;

type ButtonT = {
  children: React.ReactNode;
}

const Button: React.FC = ({children}) => {
  return (
    <DefaultButton>{children}</DefaultButton>
  );
};

export default Button;