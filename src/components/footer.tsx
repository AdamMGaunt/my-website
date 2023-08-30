import * as React from 'react';
import styled from 'styled-components';

const MyFooter = styled.div`
  display: grid;
  justify-content: center;
  background-color: #282c34;
  width: 100vw;
  position: realtive;
  z-index: 1;
`;
const FooterColumn = styled.div`
  padding: 4rem 1rem;
  text-align: center;
  color: #ffffff;
  font-size: 0.6em;
`;

const Footer: React.FC = () => {
    return (
      <MyFooter>
          <FooterColumn>
            <h5>Designed & Developed by Blind Munk Studios</h5>
            <p>Copyright Blind Munk Studios 2023</p>
          </FooterColumn>
      </MyFooter>
    );
  }
export default Footer
