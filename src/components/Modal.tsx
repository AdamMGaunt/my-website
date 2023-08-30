import React from "react";
import styled from "styled-components";

const ModalBackground = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  background-color: rgba(0,0,0,0.25);
`;
const ModalContent = styled.div`
  display: flex;
  width: 95vw;
  height: 95vh;
  padding: 1rem;
  background-color: rgba(255,255,255,0.95);
`;

type ModalT = {
  onCloseModal: () => void;
  children: React.ReactNode;
}
const Modal: React.FC = ({ children, onCloseModal }) => {  

  return (
    <>
    <ModalBackground onClick={onCloseModal}>
      <ModalContent>{children}</ModalContent>
    </ModalBackground>
    </>
  )
}

export default Modal;