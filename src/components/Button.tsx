import * as React from "react";
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
  onClick: () => void;
}

const Button: React.FC<ButtonT> = ({children}) => {
  return (
    <DefaultButton>{children}</DefaultButton>
  );
};

export default Button;